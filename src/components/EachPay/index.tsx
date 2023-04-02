import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { Button } from "../Button";
import type { User } from "src/types";
import { collection, DocumentData, getDocs, query, where } from "firebase/firestore";
import { db } from "src/firebase/firebase";
import { convertTimeToHours, formatToDay } from "src/libs/day";

type Props = {
  onClick: () => void
  color:string;
}

export const EachPay: React.FC<Props> = ({onClick, color}) => {
  const today = formatToDay(Date.now())
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const filterUsersByToday = (users: User[]): User[] => {
      const today = formatToDay(Date.now());
      const filteredUsers = users.filter((user) => {
        const workingData = user.working_data;
        const todayWorkingData = workingData?.find((data) => data.day === today);
        return !!todayWorkingData;
      });
      return filteredUsers;
    };
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      const postId = querySnapshot
      const fetchedPosts = postId.docs.map((doc) => doc.data()) as User[]
      setUsers(filterUsersByToday(fetchedPosts))
    }
    fetchData()
  }, [])
  
  return(
    <>
      {users?.map((user, index) => {
        return (
          <div css={styles.memberItem}>
            <p css={styles.eachItem}>{user.name}</p>
            <p css={styles.eachItem}>{user.wage}</p>
            <p css={styles.eachItem}>{user.working_data[0]?.time}</p>
            <p css={[styles.eachItem, styles.cost]}>
              {Number(user.wage) * convertTimeToHours(user.working_data[0]!.time)}
            </p>
            <div css={styles.eachItem}>
              <Button text="振込" backgroundColor={color} onClick={onClick}/>
            </div>
          </div>
        )
      })}
      
    </>
    
  )
}