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

export default function FourthNormalRules() {
  return (
    <div>
      <ContentCard
        title="4NF"
        body="In most cases, 1NF 2NF and 3NF will fully normalize a table. In 4NF, multivalued dependencies in a table must be multivalued dependencies on the key."
      >
        <h4 className="mt-4">birdhouses.com</h4>
        <h4 className="mb-4">Model_Colours_And_Styles_Available</h4>
        <Table className="border-2 border-solid">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[140px]">Model</TableHead>
              <TableHead className="w-[140px]">Color</TableHead>
              <TableHead className="w-[140px]">Style</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Tweety</TableCell>
              <TableCell>Yellow</TableCell>
              <TableCell>Bungalow</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tweety</TableCell>
              <TableCell>Yellow</TableCell>
              <TableCell>Duplex</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tweety</TableCell>
              <TableCell>Blue</TableCell>
              <TableCell>Bungalow</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tweety</TableCell>
              <TableCell>Blue</TableCell>
              <TableCell>Duplex</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Metro</TableCell>
              <TableCell>Brown</TableCell>
              <TableCell>High-Rise</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Metro</TableCell>
              <TableCell>Brown</TableCell>
              <TableCell>Modular</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Metro</TableCell>
              <TableCell>Grey</TableCell>
              <TableCell>High-Rise</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Metro</TableCell>
              <TableCell>Grey</TableCell>
              <TableCell>Modular</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Prairie</TableCell>
              <TableCell>Brown</TableCell>
              <TableCell>Bungalow</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Prairie</TableCell>
              <TableCell>Brown</TableCell>
              <TableCell>Schoolhouse</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Prairie</TableCell>
              <TableCell>Beige</TableCell>
              <TableCell>Bungalow</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Prairie</TableCell>
              <TableCell>Beige</TableCell>
              <TableCell>Schoolhouse</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Paragraph text="The product team wants to add a green color for the Prairie model. This means we would need to add two rows, one for Schoolhouse and one for Bungalow styles. What would happen if one write failed? Then we have a data inconsistency. Each color is supposed to be available in every style. Something about the way the table was designed allowed for this." />
        <Paragraph text="Look at the dependencies. Can color have a functional dependency on model? No, because a specific model isn`t associated with just one color. How can we express this?" />
        <Paragraph text="Using a multi-valued dependency, expressed with a double headed arrow:" />
        <Paragraph text="{Model} -->-> {Color}" />
        <Paragraph text="Fourth Normal Form states that multivalued dependencies in a table must be multivalued dependancies on the key." />

        <Paragraph text="As always, the fix is to split it into more tables. " />
        <div className="flex gap-4">
          <Table className="border-2 border-solid">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Model</TableHead>
                <TableHead className="w-[100px]">Color</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Tweety</TableCell>
                <TableCell>Yellow</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tweety</TableCell>
                <TableCell>Blue</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Metro</TableCell>
                <TableCell>Brown</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Metro</TableCell>
                <TableCell>Gray</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Prarie</TableCell>
                <TableCell>Brown</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Prarie</TableCell>
                <TableCell>Beige</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Prarie</TableCell>
                <TableCell>Green</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table className="border-2 border-solid">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Model</TableHead>
                <TableHead className="w-[100px]">Style</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Tweety</TableCell>
                <TableCell>Bungalow</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tweety</TableCell>
                <TableCell>Duplex</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Metro</TableCell>
                <TableCell>High-Rise</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Metro</TableCell>
                <TableCell>Modular</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Prarie</TableCell>
                <TableCell>Bungalow</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Prarie</TableCell>
                <TableCell>Schoolhouse</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <h2 className="my-4">Fourth Normal Form Rules </h2>
        <Paragraph text="The only kinds of multivalued dependencies allowed in a table are multivalued dependencies on the key" />
      </ContentCard>
    </div>
  );
}
