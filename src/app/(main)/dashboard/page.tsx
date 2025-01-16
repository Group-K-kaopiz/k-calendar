import { fetchUserData } from "@/app/lib/data";

export default async function Page() {
  const data = await fetchUserData();
  return (
    <div>
      <div>
        Xin chào, <strong>{data.user.name}</strong>
      </div>
      <div>
        Email: <i>{data.user.email}</i>
      </div>
    </div>
  );
}
