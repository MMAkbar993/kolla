import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="text-xl font-bold">SI&lt;3&gt; KOLLABORATOR</div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-500 to-purple-300 py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-2">WELCOME</h1>
        <h2 className="text-3xl font-light">SI HER KOLLAB LEADER</h2>
      </section>

      {/* Tabs Section */}
      <Tabs defaultValue="kollaborations" className="max-w-6xl mx-auto px-4 py-6">
        <TabsList className="mb-8 border-b w-full justify-start rounded-none bg-transparent h-auto pb-2 gap-8">
          <TabsTrigger
            value="kollaborations"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent px-0 pb-2"
          >
            Kollaborations
          </TabsTrigger>
          <TabsTrigger
            value="community-calls"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent px-0 pb-2"
          >
            Community Calls
          </TabsTrigger>
          <TabsTrigger
            value="leadership-classes"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent px-0 pb-2"
          >
            Leadership Classes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="kollaborations" className="space-y-12">
          {/* Unlock Protocol Card */}
          <div>
            <div className="text-xs text-purple-500">Education Partner</div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 md:flex-[0_0_360px]">
              <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                <img
                  src="/frame1.png"
                  alt="Custom design"
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-500">0% complete</div>
                <Progress value={0} className="h-1 mt-1" />
                <div className="text-xs text-gray-500 mt-1">0/3</div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">UNLOCK PROTOCOL</h3>
              <p className="text-sm mb-4">
                Earn 5 UP Tokens
                <br />
                Share pre-set copy and content on membership channels
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full">Join Kollab</Button>
            </div>
          </div>

          {/* Consensus Card */}
          <div>
            <div className="text-xs text-purple-500 mb-2">Event Partner</div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 md:flex-[0_0_360px]">
              {/* <div className="relative h-[200px] w-full bg-blue-600 rounded-lg overflow-hidden text-white p-4">
                <div className="absolute top-2 left-2 bg-green-400 text-black text-xs font-bold py-1 px-2 rounded">
                  MAY 14-16, 2025
                </div>
                <div className="absolute top-2 right-2 bg-black text-white text-xs py-1 px-2 rounded flex items-center">
                  <span className="mr-1">•</span> Toronto, Canada
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-2xl font-bold">
                    Crypto's Most
                    <br />
                    Influential Event
                  </h4>
                  <p className="text-sm mt-1">The #1 Destination for Dealflow</p>
                </div>
              </div> */}
              <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                <img
                  src="/frame2.png"
                  alt="Custom design"
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-500">70% complete</div>
                <Progress value={70} className="h-1 mt-1" />
                <div className="text-xs text-gray-500 mt-1">7/10</div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">CONSENSUS 2025 CONFERENCE WITH COINDESK</h3>
              <p className="text-sm mb-4">
                Free Consensus ticket for most engaged audience (top 4 communities)
                <br />
                10% off Consensus tickets for your communities
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full">Join Kollab</Button>
            </div>
          </div>

          {/* Open Campus Card */}
          <div>
            <div className="text-xs text-purple-500 mb-2">Education Partner</div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 md:flex-[0_0_360px]">
              {/* <div className="relative h-[200px] w-full bg-blue-500 rounded-lg overflow-hidden p-4">
                <div className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded">
                  Open Campus ID
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-300 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center">
                      <div className="w-16 h-8 bg-blue-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-bold">Unlock Learning With Open Campus ID</div>
              </div> */}

              <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                <img
                  src="/frame3.png"
                  alt="Custom design"
                  className="object-cover h-full w-full"
                />
              </div>

            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">OPEN CAMPUS</h3>
              <p className="text-sm mb-4">
                Earn 10 EDU tokens
                <br />
                Watch intro to Open Campus and Digital ID explainer video + Share with your members
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full">Join Kollab</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="community-calls" className="space-y-12">
          <h2 className="text-2xl font-bold mb-8">MONTHLY COMMUNITY CALLS</h2>

          {/* SI HER DAO Call */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 md:flex-[0_0_360px]">
              <div className="relative h-[200px] w-full bg-pink-100 rounded-lg overflow-hidden">
                <Image
                  src="/frame4.png"
                  alt="SI HER DAO meeting"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">SI HER DAO</h3>
              <p className="text-sm mb-4">Join us as we discuss our developing DAO, with DAO leader Anon</p>
              <Button className="bg-white border border-black text-black hover:bg-gray-100 rounded-full">
                Register for Event
              </Button>
            </div>
          </div>

          {/* Women in Web3 Media Call */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 md:flex-[0_0_360px]">
              {/* <div className="relative h-[200px] w-full bg-purple-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300"></div>
              </div> */}
              <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                <img
                  src="/frame5.png"
                  alt="Custom design"
                  className="object-cover h-full w-full"
                />
              </div>

            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">WOMEN IN WEB3 MEDIA</h3>
              <p className="text-sm mb-4">
                In this session, learn directly from social media expert Ash why how to align our messaging across
                collaborative growth.
              </p>
              <Button className="bg-white border border-black text-black hover:bg-gray-100 rounded-full">
                Register for Event
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="leadership-classes" className="space-y-12">
          <h2 className="text-2xl font-bold mb-8">SI HER LEADERSHIP CLASSES</h2>

          {/* DEAI Class */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 md:flex-[0_0_360px]">
              {/* <div className="relative h-[200px] w-full bg-orange-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 p-4">
                  <div className="grid grid-cols-3 gap-2 h-full">
                    <div className="bg-green-200 rounded-lg"></div>
                    <div className="bg-orange-300 rounded-full"></div>
                    <div className="bg-green-100 rounded-lg"></div>
                  </div>
                </div>
              </div> */}
              <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                <img
                  src="/frame6.png"
                  alt="Custom design"
                  className="object-cover h-full w-full"
                />
              </div>

            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">DEAI FOR WEB3 LEADERS</h3>
              <p className="text-sm mb-4">
                Learn how to improve your inclusion practices and communication skills as a DEAI leader
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full">View Class</Button>
            </div>
          </div>

          {/* Mental Health Class */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 md:flex-[0_0_360px]">
              {/* <div className="relative h-[200px] w-full bg-pink-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 p-4">
                  <div className="grid grid-cols-3 gap-2 h-full">
                    <div className="bg-purple-300 rounded-lg"></div>
                    <div className="bg-pink-300 rounded-lg"></div>
                    <div className="bg-purple-200 rounded-lg"></div>
                  </div>
                </div>
              </div> */}
              <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                <img
                  src="/frame7.png"
                  alt="Custom design"
                  className="object-cover h-full w-full"
                />
              </div>

            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">MENTAL HEALTH IN WEB3</h3>
              <p className="text-sm mb-4">
                Discover tips and tools to maintain well-being in the complex and fast-paced emerging tech world
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full">View Class</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
