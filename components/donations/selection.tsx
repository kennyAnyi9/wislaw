import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full lg:w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">One Time Donation</TabsTrigger>
        <TabsTrigger value="password">Recurring</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <h1 className="heading_2">Donate Once</h1>
            <p className="description_2">
              Make donations here, safely online. <br />
              Click below to start donating.
            </p>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Link href="https://paystack.com/pay/wesfund">
              <Button className="bg-orange-500 animate-bounce hover:bg-orange-600">
                Donate now
              </Button>{" "}
            </Link>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <h1 className="heading_2">Donate regularly</h1>
            <p className="description_2">
              Automate your donation process if you wish to give at regular
              intervals
              <br />
              Click below to start donating.
            </p>
          </CardHeader>

          <CardFooter>
            <Link href="https://paystack.com/pay/wesfund-recurring">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Donate now
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
