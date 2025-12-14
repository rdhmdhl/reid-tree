import ContentCard from "@/components/ContentCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Paragraph from "@/components/Paragraph";

export default function Why() {
  return (
    <div>
      <ContentCard
        title="Why not normalize everything"
        body="Below is an example of a normalized table for an online multiplayer game database."
      >
        <div className="flex flex-col mt-4 gap-y-4">
          <Paragraph text="This design is fully normalized and works well as long as item pricing is stable and derivable. The price of an item is not stored with the transaction, but instead inferred by joining on item type and date." />
          <h2>item_purchase_transaction</h2>
          <Table className="border-2 border-solid">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">transaction_number</TableHead>
                <TableHead className="w-[100px]">player_id</TableHead>
                <TableHead className="w-[100px]">purchase_date</TableHead>
                <TableHead className="w-[100px]">item_type</TableHead>
                <TableHead className="w-[100px]">item_quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>738</TableCell>
                <TableCell>elsa29</TableCell>
                <TableCell>3-NOV-2022</TableCell>
                <TableCell>Sheild</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>828</TableCell>
                <TableCell>em36</TableCell>
                <TableCell>3-NOV-2022</TableCell>
                <TableCell>Boomerang</TableCell>
                <TableCell>8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>88</TableCell>
                <TableCell>liam6</TableCell>
                <TableCell>16-NOV-2022</TableCell>
                <TableCell>Shield</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <h2>item_types_daily_prices</h2>
          <Table className="border-2 border-solid">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">date</TableHead>
                <TableHead className="w-[100px]">item_type</TableHead>
                <TableHead className="w-[100px]">unit_price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>3-NOV-2022</TableCell>
                <TableCell>Shield</TableCell>
                <TableCell>45</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3-NOV-2022</TableCell>
                <TableCell>Boomerang</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>16-NOV-2022</TableCell>
                <TableCell>Shield</TableCell>
                <TableCell>50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>16-NOV-2022</TableCell>
                <TableCell>Boomerang</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <Paragraph text="If pricing rules become more complex or context-dependent — such as bulk discounts, premium memberships, or promotions — price is no longer a simple function of item type and date. At that point, the normalized design encodes an assumption that no longer holds." />

        <Paragraph text="Below is a denormalized example that would still work in these cases:" />
        <div className="flex flex-col gap-y-4">
          <Table className="border-2 border-solid">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">transaction_number</TableHead>
                <TableHead className="w-[100px]">player_id</TableHead>
                <TableHead className="w-[100px]">purchase_date</TableHead>
                <TableHead className="w-[100px]">item_type</TableHead>
                <TableHead className="w-[100px]">unit_price</TableHead>
                <TableHead className="w-[100px]">item_quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>738</TableCell>
                <TableCell>elsa29</TableCell>
                <TableCell>3-NOV-2022</TableCell>
                <TableCell>Sheild</TableCell>
                <TableCell>45</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>828</TableCell>
                <TableCell>em36</TableCell>
                <TableCell>3-NOV-2022</TableCell>
                <TableCell>Boomerang</TableCell>
                <TableCell>10</TableCell>
                <TableCell>8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>88</TableCell>
                <TableCell>liam6</TableCell>
                <TableCell>16-NOV-2022</TableCell>
                <TableCell>Shield</TableCell>
                <TableCell>50</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <h2>Lession:</h2>

        <Paragraph text="If a dependency is unstable, policy-driven, or likely to change over time, encoding it through normalization can create brittle schemas. In those cases, storing the derived value directly is often the safer design." />
      </ContentCard>
    </div>
  );
}
