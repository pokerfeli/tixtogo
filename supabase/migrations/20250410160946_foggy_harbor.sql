/*
  # Add category field and insert attractions data

  1. Schema Changes
    - Add category column to attractions table

  2. Data Changes
    - Insert new attraction records
*/

-- Add category column
ALTER TABLE attractions ADD COLUMN IF NOT EXISTS category text;

-- Insert attractions data
INSERT INTO attractions (city, name, price, img_url, category) VALUES
(
  'New York',
  'Artec House',
  12.00,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/1artHouse.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzFhcnRIb3VzZS5qcGciLCJpYXQiOjE3NDQzMDA2OTgsImV4cCI6NDg2NjM2NDY5OH0.pATRb9VDCj2QTrvQcpjyGD3fr0Z0RQ9a__KLS8wB0Zs',
  'uniqueExperiences'
);

INSERT INTO attractions (city, name, price, img_url, category) VALUES
(
  'New York',
  'Edge Deck',
  29.00,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/2Edge_Deck.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzJFZGdlX0RlY2suanBnIiwiaWF0IjoxNzQ0MzAxMDk0LCJleHAiOjQ4NjYzNjUwOTR9.TQ4C0Ymw5bQzmY75o9aGyShinB_b6zBqQCecDaiHK8E',
  'observationDecks'
);

INSERT INTO attractions (city, name, price, img_url, category) VALUES
(
  'New York',
  'Intrepid Museum',
  0.00, -- Using 0 for "Print Ticket Only"
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/4Intrepid%20Museum.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzRJbnRyZXBpZCBNdXNldW0uanBnIiwiaWF0IjoxNzQ0MzAxMzY1LCJleHAiOjEyMjQ1Nzg5MzY1fQ.taLf18d_MwefXXD68z9PZdPJXGOuIh3ikdBAv0UIOFE',
  'museums'
);