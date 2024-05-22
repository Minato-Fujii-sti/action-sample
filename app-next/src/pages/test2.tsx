import { useMyusersAndTodsQuery } from "@graphql/generated-types";

import { Button } from "../components/ui-parts";
import { useUserList } from "src/feature/login/hooks/useUser";
import { UserDto } from "src/feature/login/types/logintype";

const Test2 = () => {
  const myuser = useMyusersAndTodsQuery();
  const { data }: { data: UserDto[] | undefined } = useUserList();
  const { data2 }: { data: UserDto[] | undefined } = useUserList();
  const { data3 }: { data: UserDto[] | undefined } = useUserList();
  const { data4 }: { data: UserDto[] | undefined } = useUserList();
  console.log(data);
  return (
    <div>
      <h1>test2</h1>
      {myuser.data?.myusers?.map((user) => {
        return (
          <div key={user?.id}>
            {user?.id}
            {user?.username}
          </div>
        );
      })}
      <Button
        onClick={() => {
          console.log("click");
        }}
      >
        test
      </Button>
    </div>
  );
};

export default Test2;
