/*
  # Insert remaining NYC attractions

  1. Changes
    - Insert multiple NYC attractions including:
      - Liberty Super Express Downtown
      - Whitney Museum
      - Madame Tussauds
      - Top of the Rock
      - Artec House
      - Liberty Midtown
      - Edge Deck
      - Mercer Labs Museum
      - Intrepid Museum
      - SpyScape
*/

-- Insert remaining attractions data
INSERT INTO attractions (
  id,
  city,
  name,
  price,
  description,
  img_url,
  category,
  child
) VALUES 
(
  '2a4ac48d-1ea6-41a5-97d9-109442f74385',
  'New York',
  'Liberty Super Express Downtown',
  8.00,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/8Liberty%20Super%20Express%20Downtown%20(50%20min)%20NYC.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzhMaWJlcnR5IFN1cGVyIEV4cHJlc3MgRG93bnRvd24gKDUwIG1pbikgTllDLmpwZyIsImlhdCI6MTc0NDMwMTY3OSwiZXhwIjoyNDM4MDkzNjc5fQ.Dtu6GXz7vnq5bF_8jB6uxyefaL4FnAg-4fuU7kMW7Yo',
  'uniqueExperiences',
  0
),
(
  '411a6d88-d533-4084-87a0-3d5b8516d2e6',
  'New York',
  'Whitney Museum',
  20.00,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/12whitney%20Museum.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzEyd2hpdG5leSBNdXNldW0uanBnIiwiaWF0IjoxNzQ0MzAyNjQ5LCJleHAiOjI0MDY1NTg2NDl9._IvFY9fwbOJj7Ezs5nmRaR-S9iX8B_NEbVCoUKdoJ94',
  'museums',
  0
),
(
  '427e84c3-0269-4ffd-910f-a62d5aa8ae4c',
  'New York',
  'Madame Tussauds',
  35.00,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/9Madame%20Tussauds%20New%20York%20NYC.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzlNYWRhbWUgVHVzc2F1ZHMgTmV3IFlvcmsgTllDLmpwZyIsImlhdCI6MTc0NDMwMjE3MiwiZXhwIjoyNzg0OTkwMTcyfQ.h4Oxdjg0hpg-erR2KoERvy6LYxMhQC65ayNTP5IH20Q',
  'uniqueExperiences',
  0
),
(
  '5f6edadc-6118-4dd5-a098-71d75031c86f',
  'New York',
  'Top of the Rock',
  30.00,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/11top%20of%20the%20rock.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzExdG9wIG9mIHRoZSByb2NrLmpwZyIsImlhdCI6MTc0NDMwMjU5OCwiZXhwIjoyNzg0OTkwNTk4fQ.0NQcXwRmqE7LuICBajmrmEfWHh2qRU3nUAhvO73O35A',
  'observationDecks',
  0
),
(
  '6de8c86d-7aa9-4277-acdd-aafdabaa8c0c',
  'New York',
  'Artec House',
  12.00,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/1artHouse.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzFhcnRIb3VzZS5qcGciLCJpYXQiOjE3NDQzMDA2OTgsImV4cCI6NDg2NjM2NDY5OH0.pATRb9VDCj2QTrvQcpjyGD3fr0Z0RQ9a__KLS8wB0Zs',
  'uniqueExperiences',
  0
),
(
  '7a2d3a53-1ec7-4e2a-9b95-8e8b0aa6f86b',
  'New York',
  'Liberty Midtown',
  10.00,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/7Liberty%20Midtown%20(1%20hour)%20NYC.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzdMaWJlcnR5IE1pZHRvd24gKDEgaG91cikgTllDLmpwZyIsImlhdCI6MTc0NDMwMTYxNywiZXhwIjoxMjI0NTc4OTYxN30.2qNdgQvr05esvZbkJm7bl6HMg-c3_vqKm7r5QJR0lrc',
  'uniqueExperiences',
  0
),
(
  '8a6c01dd-d21a-49c2-a2b8-6369a50706af',
  'New York',
  'Edge Deck',
  29.00,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/2Edge_Deck.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzJFZGdlX0RlY2suanBnIiwiaWF0IjoxNzQ0MzAxMDk0LCJleHAiOjQ4NjYzNjUwOTR9.TQ4C0Ymw5bQzmY75o9aGyShinB_b6zBqQCecDaiHK8E',
  'observationDecks',
  0
),
(
  'c34034c7-996d-44bb-bbbe-6ee26cfd2ffa',
  'New York',
  'Mercer Labs Museum of Art and Technology',
  35.00,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/13Mercer-Labs.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzEzTWVyY2VyLUxhYnMuanBnIiwiaWF0IjoxNzQ0MzAyMjM5LCJleHAiOjI3ODQ5OTAyMzl9.9_TYsY6XO-rQs4QR2z9wAWdd5nwS26ybjHCItq1kgiQ',
  'museums',
  0
),
(
  'de590f69-a7a4-4f53-94e4-8ae47f9d9e9e',
  'New York',
  'Intrepid Museum',
  0.00,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/4Intrepid%20Museum.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzRJbnRyZXBpZCBNdXNldW0uanBnIiwiaWF0IjoxNzQ0MzAxMzY1LCJleHAiOjEyMjQ1Nzg5MzY1fQ.taLf18d_MwefXXD68z9PZdPJXGOuIh3ikdBAv0UIOFE',
  'museums',
  0
),
(
  'f7252033-60dd-4940-99f2-cb95c6ff7e45',
  'New York',
  'SpyScape',
  25.00,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/10spyscape.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzEwc3B5c2NhcGUuanBnIiwiaWF0IjoxNzQ0MzAyNDk4LCJleHAiOjI3ODQ5OTA0OTh9.MNXYEQCLXHgmb3cVvgUXbIeUePkpYK0Mbm_Xm4lh3Po',
  'uniqueExperiences',
  0
);