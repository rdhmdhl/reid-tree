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

export default function Performance() {
  return (
    <div>
      <ContentCard
        title="Denormalizing for performance"
        body="Think of a database as having two concerns: correctness and speed. Normalization optimizes for correctness — minimizing redundancy and enforcing clear relationships. But performance is governed by how often and how expensively data must be assembled at read time. Denormalization is a performance technique where we intentionally duplicate or pre-compute data to reduce expensive operations like joins, aggregations, or repeated lookups. This shifts work from query time to write time. Unlike indexes or query planning, denormalization does change the logical shape of data. That tradeoff is intentional: simpler reads in exchange for more complex writes and stricter consistency rules at the application layer."
      >
        <div className="flex flex-col gap-y-4 mt-4">
          <h2>Task</h2>
          <Table className="border-2 border-solid mb-6">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">task_id</TableHead>
                <TableHead className="w-[160px]">created_by_user_id</TableHead>
                <TableHead className="w-[220px]">
                  task_creation_datetime
                </TableHead>
                <TableHead className="w-[140px]">task_status_code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>10548392</TableCell>
                <TableCell>ASMITH7</TableCell>
                <TableCell>12-NOV-2022 14:03:21</TableCell>
                <TableCell>CLOSED</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10548393</TableCell>
                <TableCell>VTA03</TableCell>
                <TableCell>12-NOV-2022 14:15:19</TableCell>
                <TableCell>OPEN</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10548394</TableCell>
                <TableCell>HGARGS</TableCell>
                <TableCell>12-NOV-2022 14:20:48</TableCell>
                <TableCell>CLOSED</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h2>Subtask</h2>
          <Table className="border-2 border-solid">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">subtask_id</TableHead>
                <TableHead className="w-[120px]">task_id</TableHead>
                <TableHead className="w-[180px]">assigned_to_user_id</TableHead>
                <TableHead className="w-[240px]">
                  subtask_assignment_datetime
                </TableHead>
                <TableHead className="w-[140px]">subtask_type_code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>26816942</TableCell>
                <TableCell>10548393</TableCell>
                <TableCell>DKENT4</TableCell>
                <TableCell>12-NOV-2022 14:04:10</TableCell>
                <TableCell>REVIEW</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>26817918</TableCell>
                <TableCell>10548393</TableCell>
                <TableCell>DKENT4</TableCell>
                <TableCell>15-NOV-2022 10:19:04</TableCell>
                <TableCell>COLLECT</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>26818235</TableCell>
                <TableCell>10548393</TableCell>
                <TableCell>PSIMMS1</TableCell>
                <TableCell>16-NOV-2022 16:43:26</TableCell>
                <TableCell>REVIEW</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>26818283</TableCell>
                <TableCell>10548393</TableCell>
                <TableCell>SVERMA3</TableCell>
                <TableCell>11-DEC-2022 11:15:01</TableCell>
                <TableCell>CONFIRM</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <Paragraph text="At this point, the Task and Subtask tables are fully normalized. They are well-suited as source-of-truth tables: optimized for correctness, clear relationships, and safe writes. However, they are not optimized for fast or repeated read paths that require assembling data across tables." />

        <Paragraph text="In practice, many systems separate these concerns. Normalized tables act as the source of truth, while additional read-optimized tables — often denormalized — exist purely to serve common queries efficiently." />

        <Paragraph text="View the tables above. Each task can have multiple subtasks assocaited with it. Let's focus on the task_status_code in the task table. We can say that indirectly, all the subtasks have a task_status_code of OPEN, because they belong to task_id 10548393. If we want to know what subtasks lastest task_status_code is, we need a query that will join tables:" />

        <h2>Read path cost</h2>

        <Paragraph text="Let’s focus on a common read path: fetching subtasks along with the current task status. Because task_status_code lives on the Task table, this read requires a join." />
        <p>SELECT s.*, t.task_status_code </p>
        <p>FROM substask s</p>
        <p>INNER JOIN task t</p>
        <p>ON s.task_id = t.task_id</p>
        <p>WHERE [some condition]</p>
        <Paragraph text="If both of these tables have many rows, the join query like this could potentially have the processing layer to work very hard." />

        <Paragraph text="Suppose that some tweaks have already been made to the processing layer, and its still a slow query. What we might do next is to change how the data is physically stored in the processing layer. Some products have a feature like this, such as a view, and adding an index to the view." />

        <Paragraph text="If this read path is frequent and latency-sensitive, and physical optimizations (indexes, query plans, materialized views) are insufficient or unavailable, the system may choose to denormalize. This is not a fallback so much as a deliberate architectural choice." />

        <h2>Denormalized read model</h2>

        <Paragraph text="Below is a denormalized version of the Subtask data. This table is not the source of truth. It exists to serve reads efficiently by duplicating task_status_code directly onto each subtask row." />

        <Table className="border-2 border-solid">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">subtask_id</TableHead>
              <TableHead className="w-[120px]">task_id</TableHead>
              <TableHead className="w-[180px]">assigned_to_user_id</TableHead>
              <TableHead className="w-[240px]">
                task_assignment_datetime
              </TableHead>
              <TableHead className="w-[140px]">task_type_code</TableHead>
              <TableHead className="w-[140px]">task_status_code</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>26816942</TableCell>
              <TableCell>10548393</TableCell>
              <TableCell>DKENT4</TableCell>
              <TableCell>12-NOV-2022 14:04:10</TableCell>
              <TableCell>REVIEW</TableCell>
              <TableCell>OPEN</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>26817918</TableCell>
              <TableCell>10548393</TableCell>
              <TableCell>DKENT4</TableCell>
              <TableCell>15-NOV-2022 10:19:04</TableCell>
              <TableCell>COLLECT</TableCell>
              <TableCell>OPEN</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>26818235</TableCell>
              <TableCell>10548393</TableCell>
              <TableCell>PSIMMS1</TableCell>
              <TableCell>16-NOV-2022 16:43:26</TableCell>
              <TableCell>REVIEW</TableCell>
              <TableCell>OPEN</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>26818283</TableCell>
              <TableCell>10548393</TableCell>
              <TableCell>SVERMA3</TableCell>
              <TableCell>11-DEC-2022 11:15:01</TableCell>
              <TableCell>CONFIRM</TableCell>
              <TableCell>OPEN</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h2>Tradeoffs</h2>

        <Paragraph text="Denormalization shifts cost from reads to writes. Any update to task_status_code must now propagate to all related subtasks. This increases write complexity and introduces the risk of temporary inconsistency." />

        <Paragraph text="For this reason, denormalized tables are often treated as read-only from the application’s perspective and updated through controlled processes such as transactions, background jobs, or event-driven pipelines." />

        <Paragraph text="A common rule of thumb is that denormalization is justified when read frequency vastly outweighs write frequency, the duplicated data changes predictably, and the system can tolerate or detect brief inconsistencies." />
      </ContentCard>
    </div>
  );
}
