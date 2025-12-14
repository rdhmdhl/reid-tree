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

export default function SecondNormalRules() {
  return (
    <div>
      <ContentCard
        title="2NF"
        body='Second normal form is about how a table`s non-key columns relate to the primary key. Below is a table with non-key attributes such as "Item_Quantity", and "Player_Rating". The primary key is a combo of "Player_Id" and "Item_Type". Each non-key attribute must depend on the entire primary key.'
      >
        <Paragraph text='Suppose we want to enhance our previous player inventory table and add "Player_Rating"' />
        <Table className="border-2 border-solid">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Player_Id</TableHead>
              <TableHead className="w-[100px]">Item_Type</TableHead>
              <TableHead className="w-[100px]">Item_Quantity</TableHead>
              <TableHead className="w-[100px]">Player_Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>rings</TableCell>
              <TableCell>2</TableCell>
              <TableCell>Advanced</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>coins</TableCell>
              <TableCell>3</TableCell>
              <TableCell>Advanced</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>coins</TableCell>
              <TableCell>2</TableCell>
              <TableCell>Intermediate</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>coins</TableCell>
              <TableCell>2</TableCell>
              <TableCell>Intermediate</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>arrows</TableCell>
              <TableCell>38</TableCell>
              <TableCell>Intermediate</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Paragraph text='This is not a good design. Notice what happend. Player 1 has an "Advanced" rating, and both rows had to be marked. Same thing applies to player 3.' />
        <Paragraph text='Suppose player 2 loses all their coins, and the row is removed. Then we want to check their player rating. This is known as a "deletion anomoly". ' />
        <Paragraph text='Suppose player 1 is leveled up to "Expert". To capture the new rating we run an update on the two records. Imagine the update goes wrong, and only a single record gets updated. Now the data is mismatched, with one row as "Expert", and one row as "Advanced". This is known as an "update anomoly". ' />
        <Paragraph text='Imagine another player joins. They are a beginer and theres is nothing in their inventory. Therefore the rating is also unrecorded. This is known as an "incertion anomoly"' />

        <h4>Do both non-key attributes depend on the entire primary key?</h4>
        <Paragraph text="{Player_ID, Item_Type} --> {Item_Quantity}" />
        <Paragraph text="{Player_ID} --> {Player_Rating}" />

        <Paragraph text="No, player rating does not depend on Item_Type. This is why the table is not 2NF, and it is vulnerable to problems. The design went wrong when we added Player_Rating where it didn`t really belong. Player is important enough to have its own table." />
        <Table className="border-2 border-solid">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Player_Id</TableHead>
              <TableHead className="w-[100px]">Player_Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Expert</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Advanced</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Intermediate</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Paragraph text="{Player_ID} --> {Player_Rating}" />
        <h2 className="my-4">Second Normal Form Rules </h2>
        <Paragraph text="Each non-key attribute in the table must be dependent on the primary key" />
      </ContentCard>
    </div>
  );
}
