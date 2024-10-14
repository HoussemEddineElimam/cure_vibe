CREATE TYPE appointment_status AS ENUM ('pending', 'inProgress', 'done');
CREATE TABLE users (
    id UUID PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    image TEXT,
    phone VARCHAR(20) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    role VARCHAR(10) CHECK (role IN ('patient', 'doctor', 'admin')),
    doctor_type VARCHAR(100),
    rating DECIMAL(3, 2),
    birth_date DATE
);
CREATE TABLE appointments (
    id UUID PRIMARY KEY,
    doctor_id UUID REFERENCES users(id),
    patient_id UUID REFERENCES users(id),
    status appointment_status NOT NULL,
    appointment_date_time TIMESTAMP NOT NULL,
    cost DECIMAL(10, 2),
    notes TEXT[],
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE conversations (
    conversation_id SERIAL PRIMARY KEY,
    sender_id UUID REFERENCES users(id),
    receiver_id UUID REFERENCES users(id)
);
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    conversation_id INT REFERENCES conversations(conversation_id),
    sender_id UUID REFERENCES users(id),
    receiver_id UUID REFERENCES users(id),
    content TEXT NOT NULL,
    time TIMESTAMP DEFAULT NOW()
);
CREATE TABLE prescriptions (
    id UUID PRIMARY KEY,
    doctor_id UUID REFERENCES users(id),
    patient_id UUID REFERENCES users(id),
    appointment_id UUID REFERENCES appointments(id),
    medication TEXT NOT NULL,
    dosage TEXT NOT NULL,
    frequency TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE
);
