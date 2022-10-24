SET
  check_function_bodies = false;

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question1',
    'Almond',
    'text',
    0.3,
    'What nut is used to make marzipan?',
    '["Almond", "Cashew", "Hazelnut", "Pecan"]',
    '["fruit", "food", "nut"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question2',
    'Canberra',
    'text',
    0.3,
    'What is the capital of Australia?',
    NULL,
    '["geography", "australia", "capitals"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question3',
    '42',
    'number',
    0.3,
    'What is 6 * 7?',
    NULL,
    '["maths", "multiplication"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question4',
    'Gouda',
    'text',
    0.3,
    'Which cheese comes from the Netherlands?',
    '["Cheddar", "Emmental", "Gouda", "Mozzarella"]',
    '["food", "cheese", "geography", "netherlands"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question5',
    '125',
    'number',
    0.3,
    'What is 500 / 4?',
    NULL,
    '["maths", "division"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question6',
    'Oxygen',
    'text',
    0.3,
    'What element does ''O'' represent on the periodic table?',
    NULL,
    '["science", "chemistry"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question7',
    '50',
    'number',
    0.3,
    'In meters, how long is an Olympic swimming pool?',
    NULL,
    '["sports", "distance"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question8',
    'Sheffield',
    'text',
    0.3,
    'Which English town has football teams called United and Wednesday?',
    NULL,
    '["sports", "football", "geography", "sheffield"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question9',
    'Everest',
    'text',
    0.3,
    'What is the highest mountain in the world?',
    '["Everest", "K2", "Mount Fuji", "Mount Kilimanjaro"]',
    '["geography", "mountains"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question10',
    'Madrid',
    'text',
    0.3,
    'What is the capital of Spain?',
    NULL,
    '["geography", "spain", "capitals"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question11',
    '3',
    'number',
    1,
    'How many breeds of elephant are there??',
    NULL,
    '["animals", "elephant"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question12',
    'The Comedy of Errors',
    'text',
    1,
    'What is shortest play by Shakespeare?',
    '["Hamlet", "King Lear", "Macbeth", "The Comedy of Errors"]',
    '["literature", "theatre", "shakespeare"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question13',
    'Dodoma',
    'text',
    1,
    'What is the capital city of Tanzania?',
    NULL,
    '["geography", "tanzania", "capitals"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question14',
    '11',
    'number',
    1,
    'How many time zones are there in Russia?',
    NULL,
    '["geography", "russia", "timezones"]'
  );

INSERT INTO
  public.questions (
    id,
    answer_value,
    answer_type,
    difficulty,
    input_label,
    input_options,
    tags
  )
VALUES
  (
    'question15',
    '1890',
    'number',
    1,
    'What year did Vincent Van Gogh die?',
    NULL,
    '["art", "history"]'
  );

INSERT INTO
  public.users (id, first_name, last_name)
VALUES
  ('user1', 'Jane', 'Doe');

INSERT INTO
  public.users (id, first_name, last_name)
VALUES
  ('user2', 'Ashley', 'Thompson');

INSERT INTO
  public.users (id, first_name, last_name)
VALUES
  ('user3', 'Paul', 'Smith');

INSERT INTO
  public.users (id, first_name, last_name)
VALUES
  ('user4', 'Thomas', 'Martin');

INSERT INTO
  public.users (id, first_name, last_name)
VALUES
  ('user5', 'Joyce', 'Wilson');