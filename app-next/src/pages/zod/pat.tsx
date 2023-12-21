import { P, match } from "ts-pattern";

const Pat = () => {
  const data: string = "minato";
  switch (data) {
    case "minato":
      console.log("aaa");
      break;
    case "fujii":
      console.log("bbb");
      break;
    default:
      console.log("ccc");
      break;
  }

  match(data)
    .with("minato", () => console.log("aaa"))
    .with("fujii", () => console.log("bbb"))
    .otherwise(() => console.log("ccc"));

  type Person = {
    name: string;
    age: number;
    sex: string;
  };
  const person: Person = {
    name: "minato",
    age: 26,
    sex: "男",
  };
  if (person.sex === "男") {
    console.log("男です");
  } else {
    console.log("女です");
  }

  if (person.sex === "男") {
    if (person.age > 20) {
      console.log(person.name + "さん");
    } else if (person.age < 20) {
      console.log(person.name + "くん");
    }
  } else if (person.sex === "女") {
    if (person.age > 15) {
      console.log(person.name + "さん");
    } else if (person.age < 15) {
      console.log(person.name + "ちゃん");
    }
  } else {
    console.log("エラーです");
  }
  const result = match(person)
    .with({ sex: "男", age: P.number.lt(20) }, (person) => person.name + "くん")
    .with({ sex: "男", age: P.number.gt(20) }, (person) => person.name + "さん")
    .with(
      { sex: "女", age: P.number.lt(15) },
      (person) => person.name + "ちゃん"
    )
    .with({ sex: "女", age: P.number.gt(15) }, (person) => person.name + "さん")
    .with(
      { name: P.string, sex: P.string, age: P.number },
      (person) => "えらー"
    )
    .exhaustive();

  return (
    <div>
      <h1>Pat</h1>
    </div>
  );
};

export default Pat;
