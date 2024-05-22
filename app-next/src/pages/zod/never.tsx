import { err, ok } from "neverthrow";

const getResponse = (flag: boolean) => {
  const okResult = ok({ message: "ok hello" });
  const ngResult = err({ message: "ng hello" });

  //   console.log(`okResult.isErr:${okResult.isErr()}`);
  //   console.log(`okResult.isOk:${okResult.isOk()}`);
  //   console.log(`ngResult.isErr:${ngResult.isErr()}`);
  //   console.log(`ngResult.isOk:${ngResult.isOk()}`);
  //   console.log(okResult.value);

  return flag ? okResult : ngResult;
};

const transform = () => {
  const flag = true;
  const okResult = ok({ message: "transform ok hello" });
  const ngResult = err({ message: "transform ng hello" });

  return flag ? okResult : ngResult;
};
const execProcess = () => {
  const flag = true;
  const okResult = ok({ message: "execProcess ok hello" });
  const ngResult = err({ message: "execProcess ng hello" });

  return flag ? okResult : ngResult;
};

export const NeverPage = () => {
  const response1 = getResponse(true);
  response1.match(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    }
  );

  const response2 = getResponse(false);
  response2.match(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    }
  );

  const processResult = ok(true)
    .andThen(getResponse)
    .andThen(transform)
    .andThen(execProcess);
  processResult.match(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    }
  );

  return (
    <div>
      <h1>Never</h1>
    </div>
  );
};

export default NeverPage;
