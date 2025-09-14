import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Clock, MapPin, User, Calendar } from "lucide-react";

const GroupView = () => {
  const { id } = useParams();

  // Mock data - would come from API based on id
  const groupData = {
    id: 1,
    title: "Grupo de Estudos - Filosofia",
    description: "Explorando os grandes pensadores da antiguidade e suas contribuições para o conhecimento humano",
    subject: "Filosofia",
    leader: "Rafael Silva",
    location: "Online - Teams",
    participants: 15,
    availableSlots: 10,
    schedule: "3ª e 5ª - 19hrs",
    image: "📚"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              src="/logohubdosaber.png"
              alt="Logo da plataforma Hub do Saber"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <span className="font-semibold text-lg">Hub do Saber</span>
          </div>
          
          <nav className="flex items-center gap-6">
            <Link to="/dashboard" className="text-muted-foreground hover:text-primary">
              Grupos
            </Link>
            <Link to="/profile" className="text-muted-foreground hover:text-primary">
              Perfil
            </Link>
            <Link to="/saiba" className="text-muted-foreground hover:text-primary">
              Saiba
            </Link>
            <Link to="/create-group">
              <Button className="bg-black hover:bg-black/90 text-white">
                Criar Grupo
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Saiba mais sobre o grupo</h1>
        </div>

        <Card className="bg-gray-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Group Image and Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{groupData.title}</h2>
                  <p className="text-muted-foreground mb-4">{groupData.description}</p>
                </div>

                {/* Group Image */}
                <div className="w-full max-w-sm mx-auto">
                  <div className="bg-gradient-to-r from-blue-100 via-purple-50 to-orange-50 rounded-lg p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{groupData.image}</div>
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <div className="text-2xl">🔍</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="p-2">
                      <span className="text-sm">📖</span>
                    </Badge>
                    <span className="font-medium">{groupData.subject}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="p-2">
                      <User className="h-4 w-4" />
                    </Badge>
                    <span className="font-medium">{groupData.leader}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="p-2">
                      <MapPin className="h-4 w-4" />
                    </Badge>
                    <span className="font-medium">{groupData.location}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="p-2">
                      <Users className="h-4 w-4" />
                    </Badge>
                    <span className="font-medium">
                      {groupData.participants} participantes - {groupData.availableSlots} vagas preenchidas
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="p-2">
                      <Calendar className="h-4 w-4" />
                    </Badge>
                    <span className="font-medium">{groupData.schedule}</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white py-3 text-lg font-medium"
                    asChild
                  >
                    <Link to={`/group/${groupData.id}/chat`}>
                      Participar do Grupo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default GroupView;