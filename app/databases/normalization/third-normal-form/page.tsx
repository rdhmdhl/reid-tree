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

export default function ThirdNormalRules() {
  return (
    <div>
      <ContentCard
        title="3NF"
        body='Imagine in our multiplayer game there`s skill levels from 1-9. Let`s say there is a deffinition of how these levels are mapped to ratings. 1-3 is "Beginner", 4-6 is "Intermediate" and 7-9 is "Advanced".'
      >
        <Table className="border-2 border-solid">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Player_Id</TableHead>
              <TableHead className="w-[100px]">Player_Rating</TableHead>
              <TableHead className="w-[100px]">Player_Skill_Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>6</TableCell>
              <TableCell>Intermediate</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>3</TableCell>
              <TableCell>Beginner</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>8</TableCell>
              <TableCell>Advanced</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>1</TableCell>
              <TableCell>Beginner</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Paragraph text="This follows 1NF and 2NF, but do you see the issue here? Suppose we want to update the Player_Rating for player 1. We then have to update the Skil_Level, but something goes wrong. The update failed for Skill_Level. Now we're stuck in a state where the ratings do not match the skill levels. " />
        <Paragraph text="{Player_ID} --> {Player_Skill_Level}" />
        <Paragraph text="{Player_ID} --> {Player_Skill_Level} --> {Player_Rating}" />

        <Paragraph text='The problem is that Player_Rating also depends on Player_Skill_Level. Dependancies of these kinds are called "transitive dependancies". Because Player_Rating depends on another non-key attribute, it violates 3FN.' />

        <Paragraph text="There is a very simple solution to fix this:" />
        <div className="flex gap-4">
          <Table className="border-2 border-solid">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Player_Id</TableHead>
                <TableHead className="w-[100px]">Player_Skill_Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>8</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table className="border-2 border-solid">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Player_Skill_Level</TableHead>
                <TableHead className="w-[100px]">Player_Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Beginner</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Beginner</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Beginner</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>Intermediate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>Intermediate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>Intermediate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>7</TableCell>
                <TableCell>Advanced</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>8</TableCell>
                <TableCell>Advanced</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>9</TableCell>
                <TableCell>Advanced</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <Paragraph text="{Player_ID} --> {Player_Skill_Level}" />
        <Paragraph text="{Player_ID} --> {Player_Rating}" />
        <h2 className="my-4">Third Normal Form Rules </h2>
        <Paragraph text="Every non-key attribute in a table should depend on the key, the whole key, and nothing but the key." />
        <h2 className="my-4">Boyce-Codd Normal Form Rules </h2>
        <Paragraph text="Every attribute in a table should depend on the key, the whole key, and nothing but the key." />
      </ContentCard>
    </div>
  );
}
