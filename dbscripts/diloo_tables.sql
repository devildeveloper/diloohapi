--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5beta2
-- Dumped by pg_dump version 9.5beta2

-- Started on 2015-12-07 17:03:47 PET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE diloopg;
--
-- TOC entry 2464 (class 1262 OID 16639)
-- Name: diloopg; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE diloopg WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';


ALTER DATABASE diloopg OWNER TO postgres;

\connect diloopg

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 2465 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- TOC entry 197 (class 3079 OID 12623)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2467 (class 0 OID 0)
-- Dependencies: 197
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 188 (class 1259 OID 16674)
-- Name: area; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE area (
    id serial NOT NULL,
    name character varying(30) NOT NULL,
    status boolean DEFAULT true NOT NULL
);


ALTER TABLE area OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 16661)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE category (
    id serial NOT NULL,
    name character varying(30) NOT NULL,
    status boolean DEFAULT true NOT NULL
);


ALTER TABLE category OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 16681)
-- Name: company; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE company (
    id serial NOT NULL,
    name character varying(30) NOT NULL,
    image character varying(100) NOT NULL,
    ruc character varying(15) NOT NULL,
    availablemessage character varying(140) NULL,
    unavailablemessage character varying(100) null,
    description character varying(250),
    status boolean DEFAULT false,
    isconected boolean DEFAULT false,
    firstupdated boolean DEFAULT true,
    isconcierge boolean DEFAULT false
);


ALTER TABLE company OWNER TO postgres;

--
-- TOC entry 190 (class 1259 OID 16691)
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE employee (
    id serial NOT NULL,
    status boolean DEFAULT true
);


ALTER TABLE employee OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 16657)
-- Name: employee_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE employee_type (
    id serial NOT NULL,
    name character varying(12) NOT NULL,
    status boolean DEFAULT true NOT NULL
);


ALTER TABLE employee_type OWNER TO postgres;

--
-- TOC entry 192 (class 1259 OID 16700)
-- Name: favorite; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE favorite (
    id serial NOT NULL,
    status boolean DEFAULT true
);


ALTER TABLE favorite OWNER TO postgres;

--
-- TOC entry 194 (class 1259 OID 16708)
-- Name: media; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE media (
    id serial NOT NULL,
    url character varying(200) NOT NULL,
    createdat timestamp without time zone DEFAULT now()
);


ALTER TABLE media OWNER TO postgres;

--
-- TOC entry 181 (class 1259 OID 16643)
-- Name: media_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE media_type (
    id serial NOT NULL,
    name character varying(20) NOT NULL,
    status boolean DEFAULT true NOT NULL
);


ALTER TABLE media_type OWNER TO postgres;

--
-- TOC entry 193 (class 1259 OID 16704)
-- Name: message; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE message (
    id serial NOT NULL,
    body character varying(200) NOT NULL,
    createdat timestamp without time zone DEFAULT now()
);


ALTER TABLE message OWNER TO postgres;

--
-- TOC entry 184 (class 1259 OID 16653)
-- Name: message_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE message_type (
    id serial NOT NULL,
    status boolean DEFAULT true NOT NULL,
    name character varying(12)
);


ALTER TABLE message_type OWNER TO postgres;

--
-- TOC entry 195 (class 1259 OID 16712)
-- Name: person; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE person (
    id serial NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(8) NOT NULL,
    firstname character varying(45) NOT NULL,
    lastname character varying(45) NOT NULL,
    image character varying(100) NOT NULL
);


ALTER TABLE person OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 16665)
-- Name: plan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE plan (
    id serial NOT NULL,
    name character varying(20) NOT NULL,
    history boolean DEFAULT false NOT NULL,
    metrics boolean DEFAULT false NOT NULL,
    monitor boolean DEFAULT false NOT NULL,
    agents integer DEFAULT 1 NOT NULL,
    ticket character varying(20) DEFAULT 'unlimited'::character varying NOT NULL,
    areas integer DEFAULT 0 NOT NULL,
    pricing numeric(3,2) NOT NULL,
    duration character varying(8) NOT NULL
);


ALTER TABLE plan OWNER TO postgres;

--
-- TOC entry 182 (class 1259 OID 16647)
-- Name: reg_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE reg_info (
    id serial NOT NULL,
    language character(2) NOT NULL,
    country character(2) NOT NULL,
    os character varying(20) NOT NULL,
    os_version character varying(10) NOT NULL,
    time_zone character varying(10) NOT NULL
);


ALTER TABLE reg_info OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 16650)
-- Name: social_auth; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE social_auth (
    id serial NOT NULL,
    token character varying(100) NOT NULL
);


ALTER TABLE social_auth OWNER TO postgres;

--
-- TOC entry 191 (class 1259 OID 16695)
-- Name: ticket; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE ticket (
    id serial NOT NULL,
    rank integer,
    status integer DEFAULT 0,
    createdat timestamp without time zone DEFAULT now(),
    openat timestamp without time zone,
    responsedat timestamp without time zone,
    closedat timestamp without time zone
);


ALTER TABLE ticket OWNER TO postgres;

--
-- TOC entry 180 (class 1259 OID 16640)
-- Name: tmp_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE tmp_user (
    id serial NOT NULL,
    email character varying(45) NOT NULL,
    code character(6) NOT NULL
);


ALTER TABLE tmp_user OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16715)
-- Name: user_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE user_data (
    id serial NOT NULL,
    status boolean DEFAULT true,
    phone character varying(12) NOT NULL
);


ALTER TABLE user_data OWNER TO postgres;

--
-- TOC entry 2466 (class 0 OID 0)
-- Dependencies: 5
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2015-12-07 17:03:48 PET

--
-- PostgreSQL database dump complete
--

