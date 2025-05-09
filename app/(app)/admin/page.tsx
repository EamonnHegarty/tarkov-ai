"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertCircle,
  Check,
  Search,
  UserCheck,
  UserX,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import {
  useGetAllUsersQuery,
  useUpdateTokenLimitMutation,
  useUpdateTrustedStatusMutation,
} from "@/lib/store/services/userApi";

export default function AdminPage() {
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [newLimit, setNewLimit] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data, isLoading, error } = useGetAllUsersQuery();
  const [updateTokenLimit] = useUpdateTokenLimitMutation();
  const [updateTrustedStatus] = useUpdateTrustedStatusMutation();

  const handleUpdateLimit = async (userId: string) => {
    try {
      await updateTokenLimit({
        userId,
        newLimit,
      }).unwrap();

      setEditingUser(null);
      setNewLimit(0);

      toast.success("Token limit updated successfully");
    } catch (err) {
      console.error("Error updating token limit:", err);
      toast.error("Failed to update token limit");
    }
  };

  const handleToggleTrustedStatus = async (
    userId: string,
    currentStatus: boolean
  ) => {
    try {
      await updateTrustedStatus({
        userId,
        isTrustedUser: !currentStatus,
      }).unwrap();

      toast.success("User status updated successfully");
    } catch (err) {
      console.error("Error updating trusted status:", err);
      toast.error("Failed to update user status");
    }
  };

  const users = data?.users || [];
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="container max-w-7xl mx-auto p-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Admin Panel - Token Management
            </CardTitle>
            <CardDescription>
              Manage token limits for users to control API usage costs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-8 w-full" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-20 w-full" />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Skeleton className="h-8 w-64" />
              <div className="space-y-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-32 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-7xl mx-auto p-4">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">
              Could not load user data. You may not have admin privileges.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Admin Panel - Token Management
          </CardTitle>
          <CardDescription>
            Manage token limits for users to control API usage costs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Users</p>
                    <p className="text-2xl font-bold">{users.length}</p>
                  </div>
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Trusted Users
                    </p>
                    <p className="text-2xl font-bold">
                      {users.filter((u) => u.isTrustedUser).length}
                    </p>
                  </div>
                  <UserCheck className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      High Usage Users ({">"}75%)
                    </p>
                    <p className="text-2xl font-bold">
                      {
                        users.filter(
                          (user) =>
                            user.tokensUsedToday / user.dailyTokenLimit > 0.75
                        ).length
                      }
                    </p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-amber-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Usage Statistics</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Tokens Used Today
                </p>
                <p className="text-xl font-semibold">
                  {users
                    .reduce((sum, user) => sum + user.tokensUsedToday, 0)
                    .toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Average Usage Per User
                </p>
                <p className="text-xl font-semibold">
                  {users.length > 0
                    ? Math.round(
                        users.reduce(
                          (sum, user) => sum + user.tokensUsedToday,
                          0
                        ) / users.length
                      ).toLocaleString()
                    : 0}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Average Usage Percentage
                </p>
                <p className="text-xl font-semibold">
                  {users.length > 0
                    ? Math.round(
                        users.reduce(
                          (sum, user) =>
                            sum +
                            (user.tokensUsedToday / user.dailyTokenLimit) * 100,
                          0
                        ) / users.length
                      )
                    : 0}
                  %
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">User Management</h2>
              <div className="relative">
                <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 w-[250px]"
                />
              </div>
            </div>

            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Daily Limit</TableHead>
                    <TableHead>Today&apos;s Usage</TableHead>
                    <TableHead>Usage %</TableHead>
                    <TableHead>Trusted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => {
                    const usagePercent = Math.round(
                      (user.tokensUsedToday / user.dailyTokenLimit) * 100
                    );
                    const usageColorClass =
                      usagePercent > 90
                        ? "bg-red-500"
                        : usagePercent > 70
                        ? "bg-amber-500"
                        : "bg-green-500";

                    return (
                      <TableRow key={user.id}>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          {editingUser === user.id ? (
                            <Input
                              type="number"
                              value={newLimit}
                              onChange={(e) =>
                                setNewLimit(parseInt(e.target.value))
                              }
                              className="w-32"
                            />
                          ) : (
                            <span>{user.dailyTokenLimit.toLocaleString()}</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {user.tokensUsedToday.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                              <div
                                className={`h-2 ${usageColorClass}`}
                                style={{
                                  width: `${Math.min(100, usagePercent)}%`,
                                }}
                              />
                            </div>
                            <span className="text-xs font-medium w-9">
                              {usagePercent}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={() =>
                              handleToggleTrustedStatus(
                                user.id,
                                user.isTrustedUser
                              )
                            }
                            variant={user.isTrustedUser ? "outline" : "ghost"}
                            size="sm"
                            className={
                              user.isTrustedUser
                                ? "border-green-500 text-green-500"
                                : ""
                            }
                          >
                            {user.isTrustedUser ? (
                              <Check className="mr-1 h-4 w-4" />
                            ) : (
                              <UserX className="mr-1 h-4 w-4" />
                            )}
                            {user.isTrustedUser ? "Trusted" : "Standard"}
                          </Button>
                        </TableCell>
                        <TableCell>
                          {editingUser === user.id ? (
                            <div className="flex items-center gap-2">
                              <Button
                                onClick={() => handleUpdateLimit(user.id)}
                                size="sm"
                              >
                                Save
                              </Button>
                              <Button
                                onClick={() => {
                                  setEditingUser(null);
                                  setNewLimit(0);
                                }}
                                variant="outline"
                                size="sm"
                              >
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <Button
                              onClick={() => {
                                setEditingUser(user.id);
                                setNewLimit(user.dailyTokenLimit);
                              }}
                              variant="outline"
                              size="sm"
                            >
                              Edit Limit
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
