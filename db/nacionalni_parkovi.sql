PGDMP     &                 	    x           or-lab1    12.2    13.0     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                        0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    26003    or-lab1    DATABASE     h   CREATE DATABASE "or-lab1" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Croatian_Croatia.1250';
    DROP DATABASE "or-lab1";
                postgres    false            �            1259    26004    nacionalni_parkovi    TABLE     �  CREATE TABLE public.nacionalni_parkovi (
    nazivparka character varying(100),
    datumosnutka date,
    drzava character varying(100),
    lokacija character varying(100),
    wikipediastranica character varying(100),
    prosjbrposjetiteljagodisnje integer,
    povrsina numeric(8,2),
    nativnavrsta character varying(100),
    sluzbenastranica character varying(100),
    klima character varying(100)
);
 &   DROP TABLE public.nacionalni_parkovi;
       public         heap    postgres    false            �
          0    26004    nacionalni_parkovi 
   TABLE DATA           �   COPY public.nacionalni_parkovi (nazivparka, datumosnutka, drzava, lokacija, wikipediastranica, prosjbrposjetiteljagodisnje, povrsina, nativnavrsta, sluzbenastranica, klima) FROM stdin;
    public          postgres    false    202   �       �
   �  x�ݗ�r�6���S�2G�ZL�&/cO�خ񤦜J��MA$D` e��ur�����+J��8Q��8��\�Ģ~��ݍ>��˙6RP'��#7�A�M阉)��J���
J���54��8�%��S��|�
o�
V�W��*��'��N�����)���Qű'q�cgt��`@�,e�3�ʳ����2��s���+/7���KP���� �ô�����RӒK�nl$��&R�/�	b��%�GQ<�rx1.&�"�Zd��G�{�K\�PB��'�$c*4�Ռ*�� x�]sa���Dn4�{��b������XJwh�v��N?��^;�$�W�㹐�^6��՜�Hs#F沍�+:��q&	�TO�)g�i�L��"HA�.J�>��'�����Grs]W �t�R<�GPP��{��^�w�d��g�3&�51TԘ���wA�[-�
p�V�\9u9��
 GG/�=�Z�5G"�����9K���o�c��_М�5)!c[�?�X,��j��[���� �?'�oߜ�̈́FH�v1�˃�k)/��o��Q�z^�G�J��0xʘ(f�ċ���DI�����EMJ��@;����|�U�;p�>kew�1m4͙�T������H�I��0h�b�Dw��:q.̥-��Q����$q�b��뺙�ʮX)��S
[)�3�{X�ڔ*0HLP���tT��ܾ~3L�7�d"��ϡ��S�ޤ�E�p�����=`�t��y����ҡ�2c�h�݇LiV����c�/PNP,o�آ�ٲ.�����4n��l��IE�wYI��Y�/D��#S��A���D��\�!5sۚ�PᐗvJ�r�vJ��6X�ͪ@cN%�O볡$?(��m�Ker�jC�E��r��.p�^�۷��%q�F�~ļɤ@���fX�b�V�u�m�rh@Q�m�o�[^���~]ڷL�qkI�Uc8�#?�����M��n���V�9�U8�̯���֙��lA�j�����'뫢������z-	�t��>?�!��SVv��+��;z�v��2�����;��k��jX|��6��
o�2jOxf%����j�ǗQ7�V�c���}�q[�3�R�f՝2��8�-��Y��w2~V�GT�����;J�Q���avH��x[[[ ����     