export const revalidate=5;
//export const dynamic = "force-dynamic";
export default async function Home() {
  return (
    <div>
      <main>
        {/*        <p>{data as string} </p> */}
        <h2 className="font-bold text-blue-600">{Date.now()}</h2>
        <h1>Home Page</h1>
        <p>
          Dashboard က parallel route ကနေလာတာပါ @dashboard နဲ့သတ်မှတ်ထားတာ ,
          သူ့ကို layout.tsx ထဲမှာ prop အနေနဲ့ ဖြတ်ပြီးတော့ သုံးထားတာပါ,
        </p>
      </main>
    </div>
  );
}
