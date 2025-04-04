"use server";

import { Database } from "../../../types_db";
import { createClient } from "../../../utils/supabase/server";

export type TodosRow = Database["public"]["Tables"]["todos"]["Row"];
export type TodosRowInsert = Database["public"]["Tables"]["todos"]["Insert"];
export type TodosRowUpdate = Database["public"]["Tables"]["todos"]["Update"];

// Create 기능
export async function createTodo(todo: TodosRowInsert) {
  const supabase = await createClient();

  // 현재 로그인한 사용자 정보 가져오기
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      data: null,
      error: userError || new Error("User not authenticated"),
      status: 401,
    };
  }

  const { data, error, status } = await supabase
    .from("todos")
    .insert([
      {
        title: todo.title,
        contents: todo.contents,
        start_date: todo.start_date,
        end_date: todo.end_date,
        user_id: user.id, // 로그인 사용자 정보
        user_email: user.email, // 로그인 사용자 정보
      },
    ])
    .select()
    .single();

  return { data, error, status };
}
// Read 기능
export async function getTodos() {
  const supabase = await createClient();
  // 현재 로그인한 사용자 정보 가져오기
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      data: null,
      error: userError || new Error("User not authenticated"),
      status: 401,
    };
  }

  const { data, error, status } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", user.id) // 로그인 사용자 정보
    .order("id", { ascending: false });
  return { data, error, status } as {
    data: TodosRow[] | null;
    error: Error | null;
    status: number;
  };
}

// Read 기능 id 한개
export async function getTodoId(id: number) {
  const supabase = await createClient();

  // 현재 로그인한 사용자 정보 가져오기
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      data: null,
      error: userError || new Error("User not authenticated"),
      status: 401,
    };
  }

  const { data, error, status } = await supabase
    .from("todos")
    .select()
    .eq("user_id", user.id) // 로그인 사용자 정보
    .eq("id", id)
    .single();
  return { data, error, status } as {
    data: TodosRow | null;
    error: Error | null;
    status: number;
  };
}

// Update 기능 id 한개
export async function updateTodoId(id: number, contents: string) {
  const supabase = await createClient();
  // 현재 로그인한 사용자 정보 가져오기
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      data: null,
      error: userError || new Error("User not authenticated"),
      status: 401,
    };
  }

  const { data, error, status } = await supabase
    .from("todos")
    .update({ contents: contents })
    .eq("user_id", user.id) // 로그인 사용자 정보
    .eq("id", id)
    .select()
    .single();

  return { data, error, status } as {
    data: TodosRow | null;
    error: Error | null;
    status: number;
  };
}
// Title 업데이트 함수

// Update 기능 id 한개
export async function updateTodoIdTitle(
  id: number,
  title: string,
  startDate: Date | undefined,
  endDate: Date | undefined
) {
  const supabase = await createClient();
  // 현재 로그인한 사용자 정보 가져오기
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      data: null,
      error: userError || new Error("User not authenticated"),
      status: 401,
    };
  }

  const { data, error, status } = await supabase
    .from("todos")
    .update({
      title: title,
      start_date: startDate?.toISOString(),
      end_date: endDate?.toISOString(),
    })
    .eq("user_id", user.id) // 로그인 사용자 정보
    .eq("id", id)
    .select()
    .single();

  return { data, error, status } as {
    data: TodosRow | null;
    error: Error | null;
    status: number;
  };
}
// Row 삭제 기능
export async function deleteTodo(id: number) {
  const supabase = await createClient();

  // 현재 로그인한 사용자 정보 가져오기
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      data: null,
      error: userError || new Error("User not authenticated"),
      status: 401,
    };
  }

  const { error, status } = await supabase
    .from("todos")
    .delete()
    .eq("user_id", user.id) // 로그인 사용자 정보
    .eq("id", id);

  return { error, status } as {
    error: Error | null;
    status: number;
  };
}
