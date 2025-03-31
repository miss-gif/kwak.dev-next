import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

type Todo = {
  id: string;
  title: string;
  is_done: boolean;
  created_at: Date;
};

export const fetchTodos = async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));

  if (querySnapshot.empty) {
    return [];
  }

  const fetchedTodos: Todo[] = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

    const aTodo = {
      id: doc.id,
      title: doc.data().title,
      is_done: doc.data().is_done,
      created_at: doc.data().created_at.toDate().toLocaleTimeString("ko-KR"),
    };
    fetchedTodos.push(aTodo);
  });
  return fetchedTodos;
};

export const addATodo = async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));

  if (querySnapshot.empty) {
    return [];
  }

  const fetchedTodos: Todo[] = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

    const aTodo = {
      id: doc.id,
      title: doc.data().title,
      is_done: doc.data().is_done,
      created_at: doc.data().created_at.toDate().toLocaleTimeString("ko-KR"),
    };
    fetchedTodos.push(aTodo);
  });
  return fetchedTodos;
};
