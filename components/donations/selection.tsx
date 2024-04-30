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
        <TabsTrigger value="account">Donate By Cheque</TabsTrigger>
        <TabsTrigger value="password">Bank Details</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <h1 className="heading_2">Mail Your Cheque</h1>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="description_2">
              A check in GH cedis or other convertible currencies must be made
              payable to Wislaw Education and Support Fund. Mail your check to:
              Wislaw Education and Support Fund. PO Box (some random bibi) Nsuta
              Tarkwa, WR/GH
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <h1 className="heading_2">Wislaw Account Details</h1>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="description_2">
              Bank: Zenith Bank <br /> Account name: Wislaw Education and
              Support Fund <br /> Account Number: 60121011708 <br />
              Swift Code: ZEBLGHAC
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
