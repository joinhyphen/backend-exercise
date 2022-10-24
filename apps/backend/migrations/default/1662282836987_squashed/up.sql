CREATE TABLE "public"."users" (
  "id" text NOT NULL,
  "first_name" text NOT NULL,
  "last_name" text NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE ("id")
);

CREATE TABLE "public"."questions_answer_type" (
  "value" text NOT NULL,
  "description" text,
  PRIMARY KEY ("value"),
  UNIQUE ("value")
);

INSERT INTO
  "public"."questions_answer_type"("value", "description")
VALUES
  ('text', null);

INSERT INTO
  "public"."questions_answer_type"("value", "description")
VALUES
  ('number', null);

CREATE TABLE "public"."questions" (
  "id" text NOT NULL,
  "input_label" text NOT NULL,
  "input_options" jsonb,
  "answer_value" text NOT NULL,
  "answer_type" text NOT NULL,
  "difficulty" Numeric NOT NULL default 0.5,
  "tags" jsonb,
  PRIMARY KEY ("id"),
  UNIQUE ("id")
);

alter table
  "public"."questions"
add
  constraint "questions_answer_type_fkey" foreign key ("answer_type") references "public"."questions_answer_type" ("value") on update restrict on delete restrict;

CREATE TABLE "public"."quizzes" (
  "id" text NOT NULL,
  "user_id" text NOT NULL,
  "started_at" timestamptz null default now(),
  "completed_at" timestamptz null,
  "total_difficulty" numeric NULL,
  "thumbnail" text NULL,
  PRIMARY KEY ("id"),
  UNIQUE ("id")
);

CREATE TABLE "public"."quizzes_questions_response_correctness" (
  "value" text NOT NULL,
  "description" text NOT NULL,
  PRIMARY KEY ("value"),
  UNIQUE ("value")
);

INSERT INTO
  "public"."quizzes_questions_response_correctness"("value", "description")
VALUES
  ('CORRECT', '');

INSERT INTO
  "public"."quizzes_questions_response_correctness"("value", "description")
VALUES
  ('INCORRECT', '');

CREATE TABLE "public"."quizzes_questions" (
  "id" text NOT NULL,
  "quiz_id" text NOT NULL,
  "question_id" text NOT NULL,
  "response" text,
  "response_correctness" text,
  "order" Integer NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE ("id")
);

alter table
  "public"."quizzes_questions"
add
  constraint "quizzes_questions_response_correctness_fkey" foreign key ("response_correctness") references "public"."quizzes_questions_response_correctness" ("value") on update restrict on delete restrict;

alter table
  "public"."quizzes"
add
  constraint "quizzes_user_id_fkey" foreign key ("user_id") references "public"."users" ("id") on update restrict on delete restrict;

alter table
  "public"."quizzes_questions"
add
  constraint "quizzes_questions_quiz_id_fkey" foreign key ("quiz_id") references "public"."quizzes" ("id") on update restrict on delete restrict;

alter table
  "public"."quizzes_questions"
add
  constraint "quizzes_questions_question_id_fkey" foreign key ("question_id") references "public"."questions" ("id") on update restrict on delete restrict;