import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, Users, MoreVertical } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-gray-50 p-4 flex flex-col">
        <nav className="space-y-4 mb-8">
          <Link href="#" className="flex items-center gap-2 text-sm p-2 hover:bg-gray-100 rounded-md">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 text-sm p-2 hover:bg-gray-100 rounded-md">
            <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white">
              <span className="text-xs">•</span>
            </div>
            <span>Kollabs</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 text-sm p-2 hover:bg-gray-100 rounded-md">
            <Users size={18} />
            <span>Teams</span>
          </Link>
        </nav>

        <div className="mb-4">
          <Input type="text" placeholder="Search Kollabs" className="bg-gray-100 border-0" />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="secondary" size="sm" className="rounded-full bg-purple-500 text-white hover:bg-purple-600">
            All
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            New
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Marketers
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" size="sm" className="rounded-full">
            Devs
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Latinamerican
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" size="sm" className="rounded-full">
            Trending
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Dao
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
          <img
                  src="/frame14.png"
                  alt="Custom design"
                  className="object-cover w-12 h-12"
                />
            <div className="flex-1">
              <h4 className="text-sm font-medium">Beginner's Guide to</h4>
              <p className="text-xs text-gray-500">By Web3 Explorers</p>
            </div>
            <MoreVertical size={16} />
          </div>

          <div className="flex items-center gap-3">
          <img
                  src="/frame16.png"
                  alt="Custom design"
                  className="object-cover w-12 h-12"
                />
            <div className="flex-1">
              <h4 className="text-sm font-medium">How to Create an NFT</h4>
              <p className="text-xs text-gray-500">By NFT Masters</p>
            </div>
            <MoreVertical size={16} />
          </div>

          <div className="flex items-center gap-3">
          <img
                  src="/frame12.png"
                  alt="Custom design"
                  className="object-cover w-12 h-12"
                />
            <div className="flex-1">
              <h4 className="text-sm font-medium">Intro to DAOs</h4>
              <p className="text-xs text-gray-500">By DAO Pioneers</p>
            </div>
            <MoreVertical size={16} />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="Profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold mb-1">ELENA OWEN</h1>
            <p className="text-gray-500 mb-1">@elenaowen</p>
            <p className="text-gray-500 mb-4">elena.edu</p>

            <div className="flex gap-4 w-full max-w-md">
              <Button variant="outline" className="flex-1 rounded-lg">
                Edit Profile
              </Button>
              <Button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white rounded-lg">Share</Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="border rounded-lg p-6 text-center">
              <h3 className="text-sm text-gray-500 mb-2">Kollabs completed</h3>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <h3 className="text-sm text-gray-500 mb-2">Total earned</h3>
              <p className="text-3xl font-bold">1111 $SIU</p>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <h3 className="text-sm text-gray-500 mb-2">Passport Badges</h3>
              <p className="text-3xl font-bold">13</p>
            </div>
          </div>

          {/* Your Kollabs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">YOUR KOLLABS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Unlock Protocol */}
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-yellow-100 relative">
                  {/* <div className="absolute inset-0 p-4">
                    <div className="w-16 h-16 bg-purple-200 rounded-full mb-4"></div>
                    <div className="w-24 h-24 bg-yellow-300 rounded-full absolute bottom-4 right-4"></div>
                    <div className="w-16 h-16 border-2 border-black rounded-full absolute top-12 left-12 flex items-center justify-center">
                      <div className="w-6 h-8 border-2 border-black rounded-t-full"></div>
                    </div>
                  </div> */}
                  <img
                    src="/frame1.png"
                    alt="Custom design"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Unlock Protocol</h3>
                  <p className="text-sm text-gray-500 mb-4">Explore Unlock Protocol</p>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">Continue</Button>
                </div>
              </div>

              {/* Consensus */}
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-blue-600 relative text-white p-4">
                  <div className="absolute top-2 left-2 bg-green-400 text-black text-xs font-bold py-1 px-2 rounded">
                    MAY 14-16, 2025
                  </div>
                  <div className="absolute top-2 right-2 bg-black text-white text-xs py-1 px-2 rounded flex items-center">
                    <span className="mr-1">•</span> Toronto, Canada
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold">
                      Crypto's Most
                      <br />
                      Influential Event
                    </h4>
                    <p className="text-xs mt-1">The #1 Destination for Dealflow</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Consensus with Coindesk</h3>
                  <p className="text-sm text-gray-500 mb-4">Attend the crypto most influential event!</p>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">Continue</Button>
                </div>
              </div>

              {/* Open Campus */}
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 relative p-4">
                  <img
                    src="/frame3.png"
                    alt="Custom design"
                    className="object-cover h-40 w-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Open Campus</h3>
                  <p className="text-sm text-gray-500 mb-4">Start your OC journey</p>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">Continue</Button>
                </div>
              </div>
            </div>
          </section>

          {/* More Kollabs */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Si Her Web3 */}
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-pink-200 relative">
                <img
                  src="/frame8.png"
                  alt="Custom design"
                  className="object-cover h-full w-full"
                />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Si Her Web3</h3>
                  <p className="text-sm text-gray-500 mb-4">Intro to Web3 education.</p>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">Continue</Button>
                </div>
              </div>

              {/* Si Her DeFi */}
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-orange-200 relative">
                <img
                  src="/frame10.png"
                  alt="Custom design"
                  className="object-cover h-full w-full"
                />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Si Her DeFi</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Advancing education and tools related to crypto and trading.
                  </p>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">Continue</Button>
                </div>
              </div>

              {/* Web3 Natives */}
              <div className="border rounded-lg overflow-hidden">
                <div className="h-40 bg-red-200 relative">
                <img
                  src="/frame9.png"
                  alt="Custom design"
                  className="object-cover h-full w-full"
                />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Web3 Natives</h3>
                  <p className="text-sm text-gray-500 mb-4">Emerging tech education in eight global languages.</p>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">Continue</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Suggested Kollaboards */}
          <section>
            <h2 className="text-2xl font-bold mb-6">SUGGESTED KOLLABOARDS</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center gap-4">
                <img
                  src="/frame11.png"
                  alt="Custom design"
                  className="object-cover w-12 h-12"
                />
                  <div>
                    <h3 className="font-bold">Web3 Natives: LATAM</h3>
                    <p className="text-sm text-gray-500">By SI&lt;3&gt;</p>
                  </div>
                </div>
                <Button variant="outline" className="rounded-full">
                  View
                </Button>
              </div>

              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center gap-4">
                <img
                  src="/frame15.png"
                  alt="Custom design"
                  className="object-cover w-12 h-12"
                />
                  <div>
                    <h3 className="font-bold">Missing Links</h3>
                    <p className="text-sm text-gray-500">By ApeCoin x SI&lt;3&gt;</p>
                  </div>
                </div>
                <Button variant="outline" className="rounded-full">
                  Apply
                </Button>
              </div>

              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center gap-4">
                <img
                  src="/frame13.png"
                  alt="Custom design"
                  className="object-cover w-12 h-12"
                />
                  <div>
                    <h3 className="font-bold">Emerging Tech Festivals</h3>
                    <p className="text-sm text-gray-500">By CONFUSION&JOY</p>
                  </div>
                </div>
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full">Kollab</Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
