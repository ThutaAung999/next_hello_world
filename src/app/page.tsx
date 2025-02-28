export default async function Home() {
  /*  const data = await new Promise((resolve) =>
    setTimeout(() =>resolve("Data loaded "), 3000)
  );
  */ return (
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
