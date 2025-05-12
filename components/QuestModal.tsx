import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Info,
  Award,
  Key,
  Target,
  Milestone,
  Skull,
  ChevronRight,
  MapPin,
  Layers,
  CheckCircle,
  Clock,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export interface QuestDetails {
  id: string;
  name: string;
  trader: string;
  map: string | null;
  kappaRequired: boolean;
  objectives?: { type: string; description: string }[];
  experience?: number;
  taskRequirements?: { task: { name: string } }[];
  minPlayerLevel?: number;
  neededKeys?: { keys: { name: string; shortName: string }[] }[];
}

interface QuestModalProps {
  isOpen: boolean;
  onClose: () => void;
  quest: QuestDetails | null;
}

const formatObjectiveType = (type: string): string => {
  const typeMap: Record<string, string> = {
    visit: "Visit Location",
    shoot: "Kill",
    extract: "Extract",
    giveItem: "Turn In Item",
    findQuestItem: "Find Quest Item",
    findItem: "Find Item",
    giveQuestItem: "Turn In Quest Item",
    buildWeapon: "Build Weapon",
  };

  return typeMap[type] || type.charAt(0).toUpperCase() + type.slice(1);
};

const getObjectiveIcon = (type: string): React.ReactNode => {
  const iconMap: Record<string, React.ReactNode> = {
    visit: <MapPin size={16} />,
    shoot: <Skull size={16} />,
    extract: <Milestone size={16} />,
    giveItem: <Layers size={16} />,
    findQuestItem: <Target size={16} />,
    findItem: <Target size={16} />,
    giveQuestItem: <CheckCircle size={16} />,
    buildWeapon: <Award size={16} />,
  };

  return iconMap[type] || <Info size={16} />;
};

const generateWikiUrl = (questName: string): string => {
  const formattedName = questName
    .replace(/\s+/g, "_")
    .replace(/['']/g, "'")
    .replace(/[""]/g, '"')
    .trim();

  return `https://escapefromtarkov.fandom.com/wiki/${formattedName}`;
};

export const QuestModal: React.FC<QuestModalProps> = ({
  isOpen,
  onClose,
  quest,
}) => {
  if (!quest) return null;

  const wikiUrl = generateWikiUrl(quest.name);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="bg-background-2 border-[#444444] text-text max-w-[80vw] md:max-w-4xl p-0 overflow-hidden"
        style={{ width: "min(90vw, 900px)" }}
      >
        <div className="bg-[#252525] border-b border-[#444444] p-4">
          <DialogHeader className="pb-0">
            <div className="flex items-center gap-2">
              <DialogTitle className="text-xl font-bold text-tarkov-secondary">
                {quest.name}
              </DialogTitle>
              {quest.kappaRequired && (
                <Badge className="bg-tarkov-secondary/10 border-tarkov-secondary/30 text-tarkov-secondary">
                  Kappa Required
                </Badge>
              )}
            </div>
            <div className="flex items-center text-sm text-text-secondary mt-1">
              <span className="text-tarkov-secondary font-medium">
                {quest.trader}
              </span>
              {quest.map && (
                <>
                  <span className="mx-2">•</span>
                  <span>{quest.map}</span>
                </>
              )}
            </div>
          </DialogHeader>

          <div className="mt-3">
            <Button
              onClick={() =>
                window.open(wikiUrl, "_blank", "noopener,noreferrer")
              }
              className="bg-[#2a2a2a] hover:bg-[#383838] text-tarkov-secondary border border-tarkov-secondary/30 hover:border-tarkov-secondary/50 transition-all duration-200"
              size="sm"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              View on Tarkov Wiki
              <ExternalLink className="h-3 w-3 ml-2" />
            </Button>
          </div>
        </div>

        <ScrollArea className="max-h-[60vh]">
          <div className="p-4 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {quest.experience && (
                <div className="bg-background-2/50 p-3 rounded-md border border-[#333333] flex">
                  <Award className="text-tarkov-secondary mr-3 h-10 w-10" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-text-secondary mb-1">
                      Experience
                    </h4>
                    <p className="text-lg font-bold text-tarkov-secondary">
                      {quest.experience.toLocaleString()} XP
                    </p>
                  </div>
                </div>
              )}

              {quest.minPlayerLevel && (
                <div className="bg-background-2/50 p-3 rounded-md border border-[#333333] flex">
                  <Clock className="text-tarkov-secondary mr-3 h-10 w-10" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-text-secondary mb-1">
                      Required Level
                    </h4>
                    <p className="text-lg font-bold text-tarkov-secondary">
                      {quest.minPlayerLevel}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {quest.taskRequirements && quest.taskRequirements.length > 0 && (
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-1 h-5 bg-tarkov-secondary mr-2 rounded-sm"></div>
                  <h3 className="text-base font-semibold text-tarkov-secondary">
                    Prerequisites
                  </h3>
                </div>

                <div className="bg-background-2/50 p-3 rounded-md border border-[#333333]">
                  <ul className="space-y-2">
                    {quest.taskRequirements.map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-tarkov-secondary mr-2" />
                        <span className="text-text ">{req.task.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {quest.neededKeys && quest.neededKeys.length > 0 && (
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-1 h-5 bg-tarkov-secondary mr-2 rounded-sm"></div>
                  <h3 className="text-base font-semibold text-tarkov-secondary">
                    Required Keys
                  </h3>
                </div>

                <div className="bg-background-2/50 p-3 rounded-md border border-[#333333]">
                  <div className="flex flex-wrap gap-2">
                    {quest.neededKeys.map((keySet, idx) => (
                      <div key={idx} className="flex flex-wrap gap-2">
                        {keySet.keys.map((key, keyIdx) => (
                          <Badge
                            key={keyIdx}
                            variant="outline"
                            className="bg-tarkov-secondary/5 text-text border-tarkov-secondary/20 flex items-center gap-1"
                          >
                            <Key className="h-3 w-3 text-tarkov-secondary" />
                            {key.name}{" "}
                            <span className="text-tarkov-secondary">
                              ({key.shortName})
                            </span>
                          </Badge>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {quest.objectives && quest.objectives.length > 0 && (
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-1 h-5 bg-tarkov-secondary mr-2 rounded-sm"></div>
                  <h3 className="text-base font-semibold text-tarkov-secondary">
                    Objectives
                  </h3>
                </div>

                <div className="space-y-3">
                  {quest.objectives.map((obj, idx) => (
                    <div
                      key={idx}
                      className="bg-background-2/50 p-3 rounded-md border border-[#333333]"
                    >
                      <div className="flex items-start">
                        <div className="bg-tarkov-secondary/10 p-2 rounded-full mr-3 mt-1">
                          {getObjectiveIcon(obj.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <Badge className="bg-tarkov-secondary/20 text-tarkov-secondary border-none">
                              {formatObjectiveType(obj.type)}
                            </Badge>
                          </div>
                          <p className="text-text">{obj.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {quest.objectives && quest.objectives.length > 5 && (
          <div className="bg-[#252525] border-t border-[#444444] p-2 text-center text-xs text-text-secondary">
            <span>
              This quest has {quest.objectives.length} total objectives
            </span>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuestModal;
