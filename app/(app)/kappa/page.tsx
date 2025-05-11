"use client";

import React, { useState, useEffect } from "react";
import { kappaUtils } from "@/lib/data/kappaQuestsHelpers";
import {
  useGetQuestStatusesQuery,
  useUpdateQuestStatusMutation,
} from "@/lib/store/services/questApi";
import { QuestChat } from "../../../components/QuestChat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Loader2,
  Check,
  AlertTriangle,
  Search,
  RefreshCw,
  CaseUpper,
  Filter,
  Info,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { KAPPA_QUESTS, MAPS, TRADERS } from "@/lib/data/kappaQuestsData";
import QuestModal, { QuestDetails } from "../../../components/QuestModal";

const KappaPage = () => {
  const [filters, setFilters] = useState({
    trader: "all",
    status: "all",
    mapFilter: "all",
    kappaOnly: false,
    searchQuery: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedQuest, setSelectedQuest] = useState<QuestDetails | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    data: serverQuestStatus = {},
    isLoading,
    error,
    refetch: refetchQuestStatuses,
  } = useGetQuestStatusesQuery();

  const [questStatus, setQuestStatus] =
    useState<Record<string, string>>(serverQuestStatus);

  const [updateQuestStatus] = useUpdateQuestStatusMutation();

  useEffect(() => {
    if (Object.keys(serverQuestStatus).length > 0) {
      setQuestStatus(serverQuestStatus);
    }
  }, [serverQuestStatus]);

  const handleStatusChange = async (
    questId: string,
    status: "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED"
  ) => {
    setQuestStatus((prevStatus) => ({
      ...prevStatus,
      [questId]: status,
    }));

    try {
      await updateQuestStatus({
        questId,
        status,
      }).unwrap();

      toast.success(
        `Quest status updated to ${status.replace("_", " ").toLowerCase()}`
      );
    } catch (error) {
      console.error("Failed to update quest status:", error);
      toast.error("Failed to update quest status on the server");

      refetchQuestStatuses();
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const isNotStarted = (questId: string) => {
    return !questStatus[questId] || questStatus[questId] === "NOT_STARTED";
  };

  const openQuestDetails = (quest: QuestDetails) => {
    setSelectedQuest(quest);
    setModalOpen(true);
  };

  const completedQuestIds = Object.entries(questStatus)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, status]) => status === "COMPLETED")
    .map(([id]) => id);

  const kappaProgress = kappaUtils.calculateKappaProgress(completedQuestIds);

  const filteredQuests = KAPPA_QUESTS.filter((quest) => {
    if (filters.kappaOnly && !quest.kappaRequired) {
      return false;
    }

    if (filters.status === "NOT_STARTED" && isNotStarted(quest.id)) {
      return true;
    }

    if (
      filters.status !== "all" &&
      filters.status !== "NOT_STARTED" &&
      questStatus[quest.id] !== filters.status
    ) {
      return false;
    }

    if (filters.trader !== "all" && quest.trader !== filters.trader) {
      return false;
    }

    if (filters.mapFilter !== "all" && quest.map !== filters.mapFilter) {
      return false;
    }

    if (
      filters.searchQuery &&
      !quest.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const sortedQuests = [...filteredQuests].sort((a, b) => {
    const statusOrder = {
      IN_PROGRESS: 0,
      NOT_STARTED: 1,
      COMPLETED: 2,
    };

    const statusA = questStatus[a.id] || "NOT_STARTED";
    const statusB = questStatus[b.id] || "NOT_STARTED";

    if (
      statusOrder[statusA as keyof typeof statusOrder] !==
      statusOrder[statusB as keyof typeof statusOrder]
    ) {
      return (
        statusOrder[statusA as keyof typeof statusOrder] -
        statusOrder[statusB as keyof typeof statusOrder]
      );
    }

    if (a.trader !== b.trader) {
      return a.trader.localeCompare(b.trader);
    }

    return a.name.localeCompare(b.name);
  });

  if (isLoading) {
    return (
      <div className="container max-w-7xl mx-auto py-4 flex items-center justify-center h-[80vh]">
        <div className="flex flex-col items-center">
          <Loader2 className="h-12 w-12 animate-spin text-tarkov-secondary mb-4" />
          <p className="text-text-secondary">Loading quest progress...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-7xl mx-auto py-4">
        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold text-red-400 mb-2">
            Error Loading Quest Data
          </h2>
          <p className="text-text-secondary mb-4">
            There was a problem retrieving your quest progress from the server.
          </p>
          <Button
            onClick={() => refetchQuestStatuses()}
            className="bg-tarkov-secondary text-black hover:bg-tarkov-secondary/80 mx-auto"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-4">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-tarkov-secondary mb-2">
          Kappa Quest Tracker
        </h1>
        <p className="text-text-secondary text-lg">
          Track your progress toward the Kappa secure container
        </p>
      </div>

      <QuestChat onQuestUpdates={() => refetchQuestStatuses()} />

      <div className="bg-ai-chat-message-background rounded-lg border border-[#444444] p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 bg-background-2 rounded-md flex items-center justify-center border border-[#444444]">
            <CaseUpper className="w-10 h-10 text-tarkov-secondary" />
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-tarkov-secondary">
                Kappa Container Progress
              </h3>
              <span className="text-sm text-text-secondary">
                {kappaProgress.completed} / {kappaProgress.total} required
                quests
              </span>
            </div>

            <Progress
              value={kappaProgress.percentage}
              className="h-3 bg-background-2"
            />

            <div className="mt-2 flex justify-between text-xs text-text-secondary">
              <span>{kappaProgress.percentage}% Complete</span>
              {kappaProgress.percentage === 100 ? (
                <span className="text-green-400">Ready for Kappa!</span>
              ) : (
                <span>
                  {kappaProgress.total - kappaProgress.completed} quests
                  remaining
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ai-chat-message-background rounded-lg border border-[#444444] p-4">
        <div className="relative mb-4">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search quests..."
            value={filters.searchQuery}
            onChange={(e) =>
              setFilters({ ...filters, searchQuery: e.target.value })
            }
            className="pl-8 bg-background-2 border-[#444] text-sm"
          />
        </div>
        <div className="flex justify-between items-center mb-3">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFilters}
            className="md:hidden "
          >
            <Filter className="h-4 w-4 mr-1" />
            Filters
          </Button>
        </div>
        <div className={`md:block ${showFilters ? "block" : "hidden"} mb-4`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label
                htmlFor="trader-filter"
                className="text-xs text-text-secondary mb-1 block"
              >
                Trader
              </label>
              <Select
                value={filters.trader}
                onValueChange={(value) =>
                  setFilters({ ...filters, trader: value })
                }
              >
                <SelectTrigger
                  id="trader-filter"
                  className="bg-background-2 border-[#444] text-text-secondary text-sm"
                >
                  <SelectValue placeholder="All Traders" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Traders</SelectItem>
                  {TRADERS.sort().map((trader) => (
                    <SelectItem key={trader} value={trader}>
                      {trader}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="status-filter"
                className="text-xs text-text-secondary mb-1 block"
              >
                Status
              </label>
              <Select
                value={filters.status}
                onValueChange={(value) =>
                  setFilters({ ...filters, status: value })
                }
              >
                <SelectTrigger
                  id="status-filter"
                  className="bg-background-2 border-[#444] text-text-secondary text-sm"
                >
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="NOT_STARTED">Not Started</SelectItem>
                  <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                  <SelectItem value="COMPLETED">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label
                htmlFor="map-filter"
                className="text-xs text-text-secondary mb-1 block"
              >
                Map
              </label>
              <Select
                value={filters.mapFilter}
                onValueChange={(value) =>
                  setFilters({ ...filters, mapFilter: value })
                }
              >
                <SelectTrigger
                  id="map-filter"
                  className="bg-background-2 border-[#444] text-text-secondary text-sm"
                >
                  <SelectValue placeholder="All Maps" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Maps</SelectItem>
                  {MAPS.sort().map((map) => (
                    <SelectItem key={map} value={map}>
                      {map}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ScrollArea className="h-[calc(100vh-28rem)]">
            {sortedQuests.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-center">
                <AlertTriangle className="h-8 w-8 text-tarkov-secondary mb-2" />
                <p className="text-text-secondary mb-2">
                  No quests match your filters
                </p>
                <p className="text-xs text-text-secondary/70">
                  Try adjusting your search criteria
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {sortedQuests.map((quest) => {
                  const status = questStatus[quest.id] || "NOT_STARTED";

                  return (
                    <div
                      key={quest.id}
                      className={`
                        bg-background-2 rounded-md border p-3 transition-colors
                        ${
                          status === "COMPLETED"
                            ? "border-green-500/30 bg-green-500/5"
                            : status === "IN_PROGRESS"
                            ? "border-tarkov-secondary/30 bg-tarkov-secondary/5"
                            : "border-[#444444]"
                        }
                      `}
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className="flex-1 min-w-0 cursor-pointer"
                          onClick={() =>
                            openQuestDetails({
                              ...quest,
                              neededKeys: quest.neededKeys || undefined,
                            })
                          }
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-base font-medium text-text truncate">
                              {quest.name}
                            </span>
                            {quest.kappaRequired && (
                              <Badge
                                variant="outline"
                                className="bg-tarkov-secondary/10 border-tarkov-secondary/30 text-tarkov-secondary text-[10px] h-4 px-1 whitespace-nowrap"
                              >
                                Kappa
                              </Badge>
                            )}
                            <Info
                              size={16}
                              className="text-text-secondary hover:text-tarkov-secondary"
                            />
                          </div>
                          <div className="text-xs text-text-secondary mb-2">
                            <span className="font-medium">{quest.trader}</span>
                            {quest.map && (
                              <>
                                <span className="mx-1">•</span>
                                <span>{quest.map}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="ml-3">
                          {status === "COMPLETED" ? (
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                              <Check className="h-4 w-4 text-green-500" />
                            </div>
                          ) : status === "IN_PROGRESS" ? (
                            <div className="w-6 h-6 rounded-full bg-tarkov-secondary/20 flex items-center justify-center">
                              <Loader2 className="h-4 w-4 text-tarkov-secondary animate-spin" />
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex mt-2 gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleStatusChange(quest.id, "NOT_STARTED")
                          }
                          className={`flex-1 h-7 text-xs ${
                            status === "NOT_STARTED"
                              ? "bg-background-2/50 border-[#555555] text-text-secondary"
                              : "bg-background border-[#444444]"
                          }`}
                        >
                          Not Started
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleStatusChange(quest.id, "IN_PROGRESS")
                          }
                          className={`flex-1 h-7 text-xs ${
                            status === "IN_PROGRESS"
                              ? "bg-tarkov-secondary/20 border-tarkov-secondary/40 text-tarkov-secondary"
                              : "bg-background border-[#444444]"
                          }`}
                        >
                          In Progress
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleStatusChange(quest.id, "COMPLETED")
                          }
                          className={`flex-1 h-7 text-xs ${
                            status === "COMPLETED"
                              ? "bg-green-500/20 border-green-500/40 text-green-500"
                              : "bg-background border-[#444444]"
                          }`}
                        >
                          Complete
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </ScrollArea>
        </div>
      </div>

      <QuestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        quest={selectedQuest}
      />
    </div>
  );
};

export default KappaPage;
