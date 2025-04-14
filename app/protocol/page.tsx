import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Home, Users, Trophy, User, Settings, LogOut } from "lucide-react"

export default function ProtocolPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 p-4 flex flex-col">
        <div className="text-xl font-bold mb-8">SI&lt;3&gt; KOLLABORATOR</div>

        <div className="mb-8">
          <h3 className="font-bold mb-4">UNLOCK PROTOCOL</h3>
          <nav className="space-y-4">
            <Link href="#" className="flex items-center gap-2 text-sm p-2 hover:bg-gray-100 rounded-md">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-sm p-2 bg-gray-200 rounded-md">
              <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white">
                <span className="text-xs">•</span>
              </div>
              <span>Kollabs</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-sm p-2 hover:bg-gray-100 rounded-md">
              <Users size={18} />
              <span>Teams</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-sm p-2 hover:bg-gray-100 rounded-md">
              <Trophy size={18} />
              <span>Leaderboard</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-sm p-2 hover:bg-gray-100 rounded-md">
              <User size={18} />
              <span>Profile</span>
            </Link>
          </nav>
        </div>

        <div className="mb-4">
          <Input type="text" placeholder="Search Teams" className="bg-gray-100 border-0" />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="secondary" size="sm" className="rounded-full bg-purple-500 text-white hover:bg-purple-600">
            All
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            New
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Trending
          </Button>
        </div>

        <div className="space-y-2">
          {["AllStars Women", "BitQueens", "Cosmos Cartel", "Crypto Conexion", "Crypto Female..."].map((team, i) => (
            <div key={i} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <div className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center">
                <span className="text-xs">•</span>
              </div>
              <span className="text-sm">{team}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-4">
          <Link href="#" className="flex items-center gap-2 text-sm p-2 hover:bg-gray-100 rounded-md">
            <Settings size={18} />
            <span>Settings</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 text-sm p-2 hover:bg-gray-100 rounded-md">
            <LogOut size={18} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="flex items-end mb-8">
            <div className="flex-1">
              <h1 className="text-6xl font-bold mb-4">Unlock</h1>
              <div className="mb-2">
                <span className="text-sm text-gray-500">70% complete</span>
                <Progress value={70} className="h-2 mt-1" />
              </div>
              <span className="text-sm text-gray-500">7/10</span>
            </div>
            <div className="flex-1">
              <div className="h-36 w-full relative">
                <div className="absolute inset-0 bg-yellow-100 rounded-lg overflow-hidden">
                  <div className="absolute top-4 right-4 w-24 h-24 bg-yellow-300 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-200 rounded-full"></div>
                  <div className="absolute top-12 left-12 w-16 h-16 border-2 border-black rounded-full flex items-center justify-center">
                    <div className="w-6 h-8 border-2 border-black rounded-t-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">ONBOARDING</h2>
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="font-bold mb-4">GET TO KNOW US!</h3>
              <div className="flex items-start gap-2 mb-2">
                <span className="font-bold">1.</span>
                <span>Watch Reel</span>
              </div>
              <p className="text-sm text-gray-500 ml-6 mb-6">
                Rewards will be automatically added to your passport when the video finishes.
              </p>

              <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center h-32">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-purple-800 mb-4">Unlock Protocol</h3>
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-white">
                        <span>▶</span>
                      </div>
                    </div>
                    <p className="text-purple-800 font-medium">Unlock your community & event's potential</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full">Submit</Button>
              </div>
            </div>
          </section>

          <section className="space-y-4 mb-12">
            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">Share Highlight Reel</h3>
              <p className="text-sm text-gray-600 mb-4">
                Share the link on X, Telegram and Discord! To make it valid you must provide screenshots.
              </p>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200 rounded-full"
                >
                  Share Link
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">Watch Unlock Demo</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn how you can use Unlock NFT's for your communities memberships, events, and certifications.
              </p>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200 rounded-full"
                >
                  Share Link
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">Participate in feedback survey</h3>
              <p className="text-sm text-gray-600 mb-4">Your feedback is valuable to us!</p>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200 rounded-full"
                >
                  Start Survey
                </Button>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">UNLOCK PRIME</h2>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">Claim Unlock's Prime NFT</h3>
              <p className="text-sm text-gray-600 mb-4">
                Claim this NFT to receive Unlock Labs basic tools for free. Upgrade to Unlock Prime and get monthly ETH
                rewards, enhanced features, and a stack of other benefits.
              </p>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200 rounded-full"
                >
                  Claim
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
