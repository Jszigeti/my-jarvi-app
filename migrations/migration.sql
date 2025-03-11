CREATE VIEW public. historyentries_stats AS
SELECT
    user_id,
    type,
    DATE_TRUNC('week', created_at) AS week,
    COUNT (message) AS total_messages_ sent,
    COUNT(*) FILTER (WHERE trigger_has_been_replied_to) AS total_replies, COUNT (*) FILTER (WHERE NOT trigger_has_been_replied_to) AS no_reply,
    (COUNT(*) FILTER (WHERE trigger_has_been_replied_to) * 100.0) / COUNT(*) AS response_rate
FROM public.historyentries
WHERE type NOT IN ( 
                    'CONNECT', 
                    'EMAIL_RECEIVED', 
                    'LINKEDIN_ INMAIL_RECEIVED',
                    'LINKEDIN_INVITATION_SENT',
                    'LINKEDIN_MESSAGE_RECEIVED',
                    'OTHER', 
                    'PHONECALL' 
                   )
GROUP BY user_id, type, week;

CREATE INDEX historyentries_optimized_key
ON public. historyentries (user_id, type, created _at)
INCLUDE (trigger_has_been_replied_to, message);