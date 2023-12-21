type Success<T> = T & {
  type: "success";
};

type Error<T> = T & {
  type: "error";
};

type ResponseSuccess = {
  name: string;
  age: number;
};

type ResponseError = {
  message: string;
};

// type Response = ResponseSuccess | ResponseError;
type Response<T, Y> = Success<T> | Error<Y>;

const createSuccess = (name: string, age: number): Success<ResponseSuccess> => {
  return {
    name,
    age,
    type: "success",
  };
};

const createError = (message: string): Error<ResponseError> => {
  return {
    message,
    type: "error",
  };
};

export const getResponse = (): Response<ResponseSuccess, ResponseError> => {
  const flag = true;
  return flag ? createSuccess("fujii", 20) : createError("error");
};

const MayBe = () => {
  const response = getResponse();
  if (response.type === "error") {
    console.log("error", response);
  } else {
    console.log("ok", response);
  }
  return (
    <div>
      <h1>MayBe</h1>
    </div>
  );
};

export default MayBe;
