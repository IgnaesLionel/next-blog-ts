import { parseISO, format } from "date-fns";

import fr from "date-fns/locale/fr";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  console.log(date)

  return (
    <time dateTime={dateString}>
      {format(date, "d LLLL yyyy", {
        locale: fr,
      })}
    </time>
  );
}
