import { getAnnouncements } from "./ForDc";

export default function Home({ announcements }) {
  return (
    <div>
      <h1>Discord Server Announcements</h1>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.timestamp}>
            <strong>{announcement.author}: </strong>
            {announcement.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const announcements = await getAnnouncements();

  return {
    props: {
      announcements,
    },
  };
}
