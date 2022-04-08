import HooksCakeContainer from "../components/HooksCakeContainer";
import IceCreamContainer from "../components/IceCreamContainer";
import UsersContainer from "../components/UsersContainer";

export default function Home() {
   return <main className="container mx-auto">
      <h1 className="text-6xl font-bold">Home</h1>
      <HooksCakeContainer />
      <IceCreamContainer />
      <UsersContainer />
   </main>
}