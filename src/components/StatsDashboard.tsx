"use client";

import { useResponseRates } from "@/hooks/useResponseRates";
import DateFilter from "./DateFilter";
import StatsChart from "./StatsChart";
import StatsTable from "./StatsTable";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import { Button } from "@/ui/button";

const StatsDashboard = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    loading,
    error,
    tableData,
    chartData,
  } = useResponseRates();

  if (loading) return <p className="text-center">Chargement...</p>;
  if (error)
    return <p className="text-center text-red-500">Erreur : {error.message}</p>;

  return (
    <Card className="p-6 space-y-8">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-lg font-bold">
          Statistiques des messages
        </CardTitle>
        <Button>Exporter en CSV</Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {/* Dates selector */}
        <DateFilter
          startDate={startDate}
          onStartDate={setStartDate}
          endDate={endDate}
          onEndDate={setEndDate}
        />
        {/* Graph */}
        <StatsChart data={chartData} />
        {/* Table */}
        <StatsTable data={tableData} />
      </CardContent>
    </Card>
  );
};

export default StatsDashboard;
