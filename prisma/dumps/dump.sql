--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.5

-- Started on 2025-07-06 09:39:58

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

\connect hotel_chavapchachi

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16407)
-- Name: Customer; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Customer" (
    id integer NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL
);


--
-- TOC entry 219 (class 1259 OID 16406)
-- Name: Customer_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Customer_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3441 (class 0 OID 0)
-- Dependencies: 219
-- Name: Customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Customer_id_seq" OWNED BY public."Customer".id;


--
-- TOC entry 222 (class 1259 OID 16416)
-- Name: Reservation; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Reservation" (
    id integer NOT NULL,
    "roomId" integer NOT NULL,
    "customerId" integer NOT NULL,
    "isVip" boolean DEFAULT false NOT NULL,
    "dateStart" timestamp(3) without time zone NOT NULL,
    "dateEnd" timestamp(3) without time zone NOT NULL,
    cost double precision NOT NULL
);


--
-- TOC entry 221 (class 1259 OID 16415)
-- Name: Reservation_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Reservation_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3442 (class 0 OID 0)
-- Dependencies: 221
-- Name: Reservation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Reservation_id_seq" OWNED BY public."Reservation".id;


--
-- TOC entry 218 (class 1259 OID 16390)
-- Name: Room; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Room" (
    id integer NOT NULL,
    number integer NOT NULL,
    description text,
    beds integer DEFAULT 1 NOT NULL,
    rooms integer DEFAULT 1 NOT NULL,
    fridge boolean DEFAULT false NOT NULL,
    microwave boolean DEFAULT false NOT NULL,
    range boolean DEFAULT false NOT NULL,
    shower boolean DEFAULT false NOT NULL,
    toilet boolean DEFAULT false NOT NULL,
    tv boolean DEFAULT false NOT NULL,
    price double precision NOT NULL
);


--
-- TOC entry 217 (class 1259 OID 16389)
-- Name: Room_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Room_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3443 (class 0 OID 0)
-- Dependencies: 217
-- Name: Room_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Room_id_seq" OWNED BY public."Room".id;


--
-- TOC entry 3272 (class 2604 OID 16410)
-- Name: Customer id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Customer" ALTER COLUMN id SET DEFAULT nextval('public."Customer_id_seq"'::regclass);


--
-- TOC entry 3273 (class 2604 OID 16419)
-- Name: Reservation id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Reservation" ALTER COLUMN id SET DEFAULT nextval('public."Reservation_id_seq"'::regclass);


--
-- TOC entry 3263 (class 2604 OID 16393)
-- Name: Room id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Room" ALTER COLUMN id SET DEFAULT nextval('public."Room_id_seq"'::regclass);


--
-- TOC entry 3432 (class 0 OID 16407)
-- Dependencies: 220
-- Data for Name: Customer; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Customer" (id, "firstName", "lastName") FROM stdin;
1	Иван	Иванов
2	Вася	Пупкин
3	Артем	Поварешкин
4	Никита	Демидов
5	Андрей	Скомофеев
6	Тимофей	Тихонов
7	Кирилл	Валишин
8	Виталий	Масленников
9	Валентин	Запашенкин
10	Михаил	Филиппов
11	Евгений	Водный
12	Григорий	Быков
13	Рустам	Сергеев
14	Алисмат	Пурганов
15	Фридрих	Энгельс
16	Апдейт	Апгрейдов
\.


--
-- TOC entry 3434 (class 0 OID 16416)
-- Dependencies: 222
-- Data for Name: Reservation; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Reservation" (id, "roomId", "customerId", "isVip", "dateStart", "dateEnd", cost) FROM stdin;
1	1	1	f	2025-07-03 19:00:00	2025-07-13 19:00:00	2200
2	3	2	f	2025-08-04 19:00:00	2025-08-14 19:00:00	22000
3	6	4	f	2025-03-04 19:00:00	2025-03-18 19:00:00	2200
4	5	5	f	2025-01-05 19:00:00	2025-01-24 19:00:00	22000
5	6	4	f	2025-04-04 19:00:00	2025-04-18 19:00:00	2200
6	5	5	f	2025-02-05 19:00:00	2025-02-24 19:00:00	22000
\.


--
-- TOC entry 3430 (class 0 OID 16390)
-- Dependencies: 218
-- Data for Name: Room; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Room" (id, number, description, beds, rooms, fridge, microwave, range, shower, toilet, tv, price) FROM stdin;
1	1	Комфортно (не) будет точно!	1	1	f	t	f	t	f	t	200
2	2	Для больших компаний	8	3	t	f	t	f	t	f	1
3	3	Дорого и жестко	2	1	f	f	f	f	f	f	2000
4	4	Для него и для нее	2	2	t	t	t	t	f	f	665
5	5	Маленькая, да удаленькая	1	1	t	f	t	f	t	f	150
6	6	Для друзей	4	1	t	t	f	f	t	t	300
\.


--
-- TOC entry 3444 (class 0 OID 0)
-- Dependencies: 219
-- Name: Customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Customer_id_seq"', 16, true);


--
-- TOC entry 3445 (class 0 OID 0)
-- Dependencies: 221
-- Name: Reservation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Reservation_id_seq"', 6, true);


--
-- TOC entry 3446 (class 0 OID 0)
-- Dependencies: 217
-- Name: Room_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Room_id_seq"', 6, true);


--
-- TOC entry 3279 (class 2606 OID 16414)
-- Name: Customer Customer_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Customer"
    ADD CONSTRAINT "Customer_pkey" PRIMARY KEY (id);


--
-- TOC entry 3281 (class 2606 OID 16422)
-- Name: Reservation Reservation_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Reservation"
    ADD CONSTRAINT "Reservation_pkey" PRIMARY KEY (id);


--
-- TOC entry 3277 (class 2606 OID 16405)
-- Name: Room Room_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Room"
    ADD CONSTRAINT "Room_pkey" PRIMARY KEY (id);


--
-- TOC entry 3275 (class 1259 OID 16423)
-- Name: Room_number_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Room_number_key" ON public."Room" USING btree (number);


--
-- TOC entry 3282 (class 2606 OID 16429)
-- Name: Reservation Reservation_customerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Reservation"
    ADD CONSTRAINT "Reservation_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES public."Customer"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3283 (class 2606 OID 16424)
-- Name: Reservation Reservation_roomId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Reservation"
    ADD CONSTRAINT "Reservation_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES public."Room"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


-- Completed on 2025-07-06 09:39:58

--
-- PostgreSQL database dump complete
--
