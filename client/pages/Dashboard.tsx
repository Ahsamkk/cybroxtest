import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { toast } from "sonner";
import { api } from "@/lib/api";
import { clearAdminToken, getAdminToken } from "@/lib/adminAuth";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  service: string | null;
  message: string;
  createdAt: string;
}

interface CareerApplication {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  position: string;
  resumeName: string;
  createdAt: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [careers, setCareers] = useState<CareerApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!getAdminToken()) {
      navigate("/login");
      return;
    }
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [contactsRes, careersRes] = await Promise.all([
        api.get("/api/admin/contacts"),
        api.get("/api/admin/careers"),
      ]);
      setContacts(contactsRes.data);
      setCareers(careersRes.data);
    } catch (error: any) {
      if (error.response?.status === 401) {
        clearAdminToken();
        toast.error("Session expired. Please log in again.");
        navigate("/login");
      } else {
        toast.error("Failed to load submissions.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    clearAdminToken();
    navigate("/login");
  };

  const downloadResume = async (id: string) => {
    try {
      const { data } = await api.get(`/api/admin/careers/${id}/resume`);
      window.open(data.url, "_blank");
    } catch (error) {
      toast.error("Failed to get resume link.");
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="container mx-auto max-w-6xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Log Out
          </Button>
        </div>

        {isLoading ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : (
          <Tabs defaultValue="contacts">
            <TabsList>
              <TabsTrigger value="contacts">
                Contact Submissions ({contacts.length})
              </TabsTrigger>
              <TabsTrigger value="careers">
                Career Applications ({careers.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contacts">
              <Card className="bg-card/30 border-border">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contacts.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center text-muted-foreground">
                            No submissions yet.
                          </TableCell>
                        </TableRow>
                      ) : (
                        contacts.map((c) => (
                          <TableRow key={c.id}>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>{c.email}</TableCell>
                            <TableCell>{c.company || "-"}</TableCell>
                            <TableCell>{c.service || "-"}</TableCell>
                            <TableCell className="max-w-xs truncate">{c.message}</TableCell>
                            <TableCell>{new Date(c.createdAt).toLocaleString()}</TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="careers">
              <Card className="bg-card/30 border-border">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {careers.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center text-muted-foreground">
                            No applications yet.
                          </TableCell>
                        </TableRow>
                      ) : (
                        careers.map((c) => (
                          <TableRow key={c.id}>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>{c.email}</TableCell>
                            <TableCell>{c.phone || "-"}</TableCell>
                            <TableCell>{c.position}</TableCell>
                            <TableCell>
                              <Button
                                variant="link"
                                className="p-0 h-auto"
                                onClick={() => downloadResume(c.id)}
                              >
                                {c.resumeName}
                              </Button>
                            </TableCell>
                            <TableCell>{new Date(c.createdAt).toLocaleString()}</TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}
