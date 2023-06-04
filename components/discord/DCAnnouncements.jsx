"use client";
import DiscordMessages from "@public/assets/scripts/ForDc";

const DCAnnouncements = () => {
  const channelId = "709352429044629621"; // Replace with the actual channel ID
  const token =
    "Bot ODYzNTkwOTc1MDY2OTk2Nzc2.GBURJB.zmUMIgNoxUDzptQCQFOQZJDovzQ11ETTJMaTXw"; // Replace with your Discord bot token

  return (
    <div>
      <h1>My Next.js App</h1>
      <DiscordMessages channelId={channelId} token={token} />
    </div>
  );
};
//   const [announcements, setAnnouncements] = useState([]);

//   useEffect(() => {
//     fetch("/assets/scripts/ForDC.js")
//       .then((response) => response.json())
//       .then((data) => {
//         setAnnouncements(data.announcements);
//       })
//       .catch((error) => {
//         console.error("Error :", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Discord Server Announcements</h2>
//       <ul>
//         {announcements.map((announcement) => (
//           <li key={announcement.id}>
//             <p>{announcement.content}</p>
//             <p>Author: {announcement.author.name}</p>
//             <p>
//               Timestamp: {new Date(announcement.timestamp).toLocaleString()}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

export default DCAnnouncements;
