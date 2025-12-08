import ContentCard from "@/components/ContentCard";
import Paragraph from "@/components/Paragraph";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function FifthNormalRules() {
  return (
    <div>
      <ContentCard
        title="5NF"
        body='Imagine there are three differnt brands of ice cream available. Each of the three brands offer a range of flavors. Jason says "I only like vanilla and choclate. And I only like the brands Frosty`s and Alpine". Suzy says "I only like rum rasin, mint chocolate chip, and strawberry. And I only like the brands Alpine and Ice Queen". Let`s make a table for this.'
      >
        <div className="flex justify-around my-4">
          <div className="mb-8 p-4 border rounded-lg shadow-sm bg-white">
            <p className="text-lg font-semibold mb-2">Brand: Frosty’s</p>
            <p className="text-sm font-medium mb-2">Flavors offered:</p>

            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Vanilla</li>
              <li>Chocolate</li>
              <li>Strawberry</li>
              <li>Mint Chocolate Chip</li>
            </ul>
          </div>

          <div className="mb-8 p-4 border rounded-lg shadow-sm bg-white">
            <p className="text-lg font-semibold mb-2">Brand: Alpine</p>
            <p className="text-sm font-medium mb-2">Flavors offered:</p>

            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Vanilla</li>
              <li>Rum Raisin</li>
            </ul>
          </div>

          <div className="mb-8 p-4 border rounded-lg shadow-sm bg-white">
            <p className="text-lg font-semibold mb-2">Brand: Ice Queen</p>
            <p className="text-sm font-medium mb-2">Flavors offered:</p>

            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Vanilla</li>
              <li>Strawberry</li>
              <li>Mint Chocolate Chip</li>
            </ul>
          </div>
        </div>
        <h4 className="mb-4">Preferred_Ice_Cream_Products_By_Person</h4>
        <Table className="border-2 border-solid">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[140px]">Person</TableHead>
              <TableHead className="w-[140px]">Brand</TableHead>
              <TableHead className="w-[200px]">Flavor</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Jason</TableCell>
              <TableCell>Frosty’s</TableCell>
              <TableCell>Vanilla</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jason</TableCell>
              <TableCell>Frosty’s</TableCell>
              <TableCell>Chocolate</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jason</TableCell>
              <TableCell>Alpine</TableCell>
              <TableCell>Vanilla</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Suzy</TableCell>
              <TableCell>Alpine</TableCell>
              <TableCell>Rum Raisin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Suzy</TableCell>
              <TableCell>Ice Queen</TableCell>
              <TableCell>Mint Chocolate Chip</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Suzy</TableCell>
              <TableCell>Ice Queen</TableCell>
              <TableCell>Strawberry</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Paragraph text="Suzy now likes Frosty`s brand too. Therefore we would need to add two rows, one for strawberry and one for mint chocolate chip. What if one fails? Well the issue was how the table was designed." />
        <Paragraph text="We went wrong right in the begining, and we should have created three tables. " />

        <div className="flex gap-4">
          <Table className="border-2 border-solid mt-6">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Brand</TableHead>
                <TableHead className="w-[200px]">Flavor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Frosty’s</TableCell>
                <TableCell>Vanilla</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Frosty’s</TableCell>
                <TableCell>Strawberry</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Frosty’s</TableCell>
                <TableCell>Mint Chocolate Chip</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Alpine</TableCell>
                <TableCell>Vanilla</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Alpine</TableCell>
                <TableCell>Rum Raisin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ice Queen</TableCell>
                <TableCell>Vanilla</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ice Queen</TableCell>
                <TableCell>Strawberry</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ice Queen</TableCell>
                <TableCell>Mint Chocolate Chip</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table className="border-2 border-solid mt-6">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Person</TableHead>
                <TableHead className="w-[200px]">Brand</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Jason</TableCell>
                <TableCell>Frosty’s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jason</TableCell>
                <TableCell>Alpine</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Suzy</TableCell>
                <TableCell>Alpine</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Suzy</TableCell>
                <TableCell>Ice Queen</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <Table className="border-2 border-solid mt-4">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Person</TableHead>
              <TableHead className="w-[200px]">Flavor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Jason</TableCell>
              <TableCell>Vanilla</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jason</TableCell>
              <TableCell>Chocolate</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Suzy</TableCell>
              <TableCell>Rum Raisin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Suzy</TableCell>
              <TableCell>Mint Chocolate Chip</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Suzy</TableCell>
              <TableCell>Strawberry</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <h2 className="my-4">Fifth Normal Form Rules </h2>
        <Paragraph text="It must not be possible to describe the table as being the logical result of joining some other tables together" />
      </ContentCard>
    </div>
  );
}
