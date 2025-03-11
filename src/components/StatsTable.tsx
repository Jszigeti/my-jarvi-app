import { typeTranslations } from "@/constants/messageTypes";
import { StatsTableProps } from "@/types/tables";
import { formatWeekRange } from "@/utils/dateHelpers";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/ui/table";

const StatsTable = ({ data }: StatsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-primary hover:bg-primary">
          <TableHead className="w-1/5 text-center text-white">
            Semaine
          </TableHead>
          <TableHead className="w-1/5 text-center text-white">Type</TableHead>
          <TableHead className="text-center text-white">
            Messages envoyés
          </TableHead>
          <TableHead className="text-center text-white">Réponses</TableHead>
          <TableHead className="text-center text-white">Sans réponse</TableHead>
          <TableHead className="text-center text-white">
            Taux de réponse
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(data).map(([week, entries]) => {
          return entries.map((entry, index) => (
            <TableRow key={`${week}-${entry.type}`}>
              {index === 0 && (
                <TableCell
                  rowSpan={entries.length}
                  className="font-bold bg-gray-100 text-center"
                >
                  {formatWeekRange(week)}
                </TableCell>
              )}
              <TableCell className="text-center">
                {typeTranslations[entry.type] || entry.type}
              </TableCell>
              <TableCell className="text-center">
                {entry.total_messages_sent}
              </TableCell>
              <TableCell className="text-center">
                {entry.total_replies}
              </TableCell>
              <TableCell className="text-center">{entry.no_reply}</TableCell>
              <TableCell className="text-center">
                {entry.response_rate.toFixed(2)}%
              </TableCell>
            </TableRow>
          ));
        })}
      </TableBody>
    </Table>
  );
};

export default StatsTable;
