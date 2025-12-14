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

export default function FirstNormalRules() {
  return (
    <div>
      <ContentCard
        title="1NF"
        body='First normal form. Suppose we are confronted with the question, "Who were the members of the Beatles?". You answer "John, Paul, George and Ringo." I answer "Paul, John, Ringo and George." The answers are equivalent. When it comes to relational databases the same principal applies. There is no such thing as row order in a relational database table.'
      >
        <div className="my-2">
          <h4>SELECT Member_Name FROM Members_Of_The_Beatles;</h4>
        </div>
        <div className="flex gap-4">
          <Table className="border-2 border-solid">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Beatle</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Paul</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>George</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ringo</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table className="border-2 border-solid">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Beatle</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Paul</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>John</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ringo</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>George</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <Paragraph text="Using row order to convey information violates 1NF. To fix this, you will want to create a separate column for it." />
        <Table className="border-2 border-solid">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Beatle</TableHead>
              <TableHead className="w-[100px]">Height_In_Cm</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>178</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Paul</TableCell>
              <TableCell>179</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>George</TableCell>
              <TableCell>170</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ringo</TableCell>
              <TableCell>180</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Paragraph
          text="Another way to violate 1NF is to mix data type. Suppose the Beatle height table looks like this:
          "
        />
        <Table className="border-2 border-solid">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Beatle</TableHead>
              <TableHead className="w-[100px]">
                Height_In_Cm (integer)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>178</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Paul</TableCell>
              <TableCell>179</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>George</TableCell>
              <TableCell>170</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ringo</TableCell>
              <TableCell>Somewhere between 180 and 183</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Paragraph text="The third way to violate 1NF is to not have a primary key. A primary key is a column, or a combination of columns that uniquely identifies a row in the table. For example, the row in Beatle Height should have a primary key like this:" />
        <h4>ALTER TABLE Beatle_Height ADD PRIMARY KEY (Beatle);</h4>
        <Paragraph text='Making "Beatle" the primary key prevents this:' />
        <Table className="border-2 border-solid">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Beatle</TableHead>
              <TableHead className="w-[100px]">Height_In_Cm</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>178</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>178</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Paul</TableCell>
              <TableCell>179</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>George</TableCell>
              <TableCell>170</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ringo</TableCell>
              <TableCell>180</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Paragraph text='The last way to fail to acheive 1NF involves "repeating groups". Suppose we are designing a database for a video game that has an inventory for each player. There might be hundereds of items in each players inventory. Below is a terrible design that has repeating groups:' />
        <Table className="border-2 border-solid">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Player_Id</TableHead>
              <TableHead className="w-[100px]">Inventory</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>2 rings, 3 coins</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>3 sheilds, 5 arrows</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>2 coins</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Paragraph text='This would be very hard to query for player inventory. A better solution would be to add an "item_type" and "item_quantity" column in our inventory table:' />
        <Table className="border-2 border-solid">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Player_Id</TableHead>
              <TableHead className="w-[100px]">Item_Type</TableHead>
              <TableHead className="w-[100px]">Item_Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>rings</TableCell>
              <TableCell>2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>coins</TableCell>
              <TableCell>3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>coins</TableCell>
              <TableCell>2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <h2 className="my-4">First Normal Form Rules </h2>
        <Paragraph text="1) Using row order to convey information is not permitted" />
        <Paragraph text="2) Mixing data types within the same column is not permitted" />
        <Paragraph text="3) Having a table without a primary key is not permitted" />
        <Paragraph text="4) Repeating groups are not permitted" />
      </ContentCard>
    </div>
  );
}
