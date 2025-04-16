import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Home, Users, Trophy, User, Settings, LogOut, Bell } from "lucide-react"

export default function ProtocolPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="text-xl font-bold font-clesmont">SI&lt;3&gt; KOLLABORATOR</div>
        <div className="flex items-center gap-8">
          <nav className="flex gap-6">
            <Link href="#" className="text-sm font-medium font-roobert">
              My Kollabs
            </Link>
            <Link href="#" className="text-sm font-medium font-roobert">
              My Classes
            </Link>
            <Link href="#" className="text-sm font-medium font-roobert">
              Explore Teams
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Bell size={20} />
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <Image src="/placeholder.svg?height=32&width=32" alt="Profile" width={32} height={32} />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[280px] border-r min-h-[calc(100vh-65px)] p-6 flex flex-col">
          <div className="font-bold mb-6 font-roobert">UNLOCK PROTOCOL</div>

          <nav className="space-y-1 mb-6">
            <Link href="#" className="flex items-center gap-3 text-sm p-2 rounded-md hover:bg-gray-100 font-roobert">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-sm p-2 rounded-md bg-gray-100 font-roobert">
              <div className="w-[18px] h-[18px] flex items-center justify-center">
                <span className="text-xs">•</span>
              </div>
              <span>Kollabs</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-sm p-2 rounded-md hover:bg-gray-100 font-roobert">
              <Users size={18} />
              <span>Teams</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-sm p-2 rounded-md hover:bg-gray-100 font-roobert">
              <Trophy size={18} />
              <span>Leaderboard</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-sm p-2 rounded-md hover:bg-gray-100 font-roobert">
              <User size={18} />
              <span>Profile</span>
            </Link>
          </nav>

          <div className="mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search Teams"
                className="bg-gray-100 border-0 pl-4 pr-4 py-2 rounded-full text-sm font-roobert"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Button size="sm" className="rounded-full bg-purple-500 text-white hover:bg-purple-600 font-roobert">
              All
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full bg-gray-100 border-0 hover:bg-gray-200 font-roobert"
            >
              New
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full bg-gray-100 border-0 hover:bg-gray-200 font-roobert"
            >
              Trending
            </Button>
          </div>

          <div className="space-y-2 mb-auto">
            {[
              { name: "AllStars Women", icon: "⚓" },
              { name: "BitQueens", icon: "👑" },
              { name: "Cosmos Cartel", icon: "🌌" },
              { name: "Crypto Conexion", icon: "🔗" },
              { name: "Crypto Female...", icon: "👩" },
            ].map((team, i) => (
              <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <div className="w-6 h-6 bg-gray-100 rounded-md flex items-center justify-center text-xs">
                  {team.icon}
                </div>
                <span className="text-sm font-roobert">{team.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto space-y-2">
            <Link href="#" className="flex items-center gap-3 text-sm p-2 hover:bg-gray-100 rounded-md font-roobert">
              <Settings size={18} />
              <span>Settings</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-sm p-2 hover:bg-gray-100 rounded-md font-roobert">
              <LogOut size={18} />
              <span>Logout</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            <div className="flex mb-8">
              <div className="flex-1">
                <h1 className="text-6xl font-bold mb-4 font-clesmont">Unlock</h1>
                <div className="mb-2">
                  <span className="text-sm text-gray-500 font-roobert">70% complete</span>
                  <Progress value={70} className="h-2 mt-1 bg-gray-200">
                    <div className="h-full bg-pink-500 rounded-full" style={{ width: "70%" }}></div>
                  </Progress>
                </div>
                <span className="text-sm text-gray-500 font-roobert">7/10</span>
              </div>
              <div className="flex-1">
                <div className="relative h-[150px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-[#f9f8f3] rounded-lg">
                    <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#c8e889]"></div>
                    <div className="absolute bottom-0 left-[40%] w-[80px] h-[80px] bg-[#f8c0ae] rounded-full"></div>
                    <div className="absolute top-[20%] right-[20%] w-[120px] h-[80px] bg-[#e2c76b]"></div>
                    <div className="absolute top-[30%] left-[30%] w-[100px] h-[60px] bg-[#d0c5f7]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[100px] h-[100px] border-2 border-black rounded-lg relative">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[30px] h-[40px] border-2 border-black rounded-t-full"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0">
                      <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M50,100 Q100,50 150,100 T250,100" fill="none" stroke="black" strokeWidth="2" />
                        <path d="M70,50 Q120,0 170,50 T270,50" fill="none" stroke="black" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-clesmont">ONBOARDING</h2>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="font-bold mb-4 font-roobert">GET TO KNOW US!</h3>
                <div className="flex items-start gap-2 mb-2">
                  <span className="font-bold font-roobert">1.</span>
                  <span className="font-roobert">Watch Reel</span>
                </div>
                <p className="text-sm text-gray-500 ml-6 mb-6 font-roobert">
                  Rewards will be automatically added to your passport when the video finishes.
                </p>

                <div className="bg-[#f9f4e7] rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center h-32">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-[#3a1c96] mb-4 font-clesmont">Unlock Protocol</h3>
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 bg-[#3a1c96] rounded-full flex items-center justify-center text-white">
                          <span>▶</span>
                        </div>
                      </div>
                      <p className="text-[#3a1c96] font-medium font-roobert">
                        Unlock your community & event's potential
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-black text-white hover:bg-gray-800 rounded-full font-roobert">Submit</Button>
                </div>
              </div>
            </section>

            <section className="space-y-4 mb-12">
              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold mb-2 font-roobert">Share Highlight Reel</h3>
                    <p className="text-sm text-gray-600 font-roobert">
                      Share the link on X, Telegram and Discord! To make it valid you must provide screenshots.
                    </p>
                  </div>
                  <Button className="bg-purple-200 text-purple-600 hover:bg-purple-300 rounded-full font-roobert">
                    Share Link
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold mb-2 font-roobert">Watch Unlock Demo</h3>
                    <p className="text-sm text-gray-600 font-roobert">
                      Learn how you can use Unlock NFT's for your communities memberships, events, and certifications.
                    </p>
                  </div>
                  <Button className="bg-purple-200 text-purple-600 hover:bg-purple-300 rounded-full font-roobert">
                    Share Link
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold mb-2 font-roobert">Participate in feedback survey</h3>
                    <p className="text-sm text-gray-600 font-roobert">Your feedback is valuable to us!</p>
                  </div>
                  <Button className="bg-purple-200 text-purple-600 hover:bg-purple-300 rounded-full font-roobert">
                    Start Survey
                  </Button>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 font-clesmont">UNLOCK PRIME</h2>
              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold mb-2 font-roobert">Claim Unlock's Prime NFT</h3>
                    <p className="text-sm text-gray-600 font-roobert">
                      Claim this NFT to receive Unlock Labs basic tools for free. Upgrade to Unlock Prime and get
                      monthly ETH rewards, enhanced features, and a stack of other benefits.
                    </p>
                  </div>
                  <Button className="bg-purple-200 text-purple-600 hover:bg-purple-300 rounded-full font-roobert">
                    Claim
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
