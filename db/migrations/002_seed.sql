INSERT INTO courses(title,slug,description,price,is_free,is_published)
VALUES ('JEE Physics Complete Course','jee-physics-complete-course','Complete JEE Physics preparation with video lessons, notes and tests.',499,false,true)
ON CONFLICT (slug) DO NOTHING;
INSERT INTO courses(title,slug,description,price,is_free,is_published)
VALUES ('Foundation Physics','foundation-physics','Strong physics fundamentals for Classes 9–10.',299,false,true)
ON CONFLICT (slug) DO NOTHING;
