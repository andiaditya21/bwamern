import React from "react";
import { Link } from "react-router-dom"; //route navigasi dalam applikasi
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className]; // property apapun yang dilempar dari component yang pakai button ini
  if (props.isSmall) className.push("btn-sm");
  if (props.isLarge) className.push("btn-lg");
  if (props.isBlock) className.push("btn-block");
  if (props.isPrimary) className.push("btn-primary");
  if (props.hasShadow) className.push("btn-shadow"); // class custom

  // Memastikan function onClick tersedia
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  // isLoading atau isDisabled
  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled"); // masukkan class "disabled" (Bootstrap) jika tertulis isDisabled di parent
    return (
      // memasukkan atrb className (isDisabled & isLoading) & style ke dalam <span>
      <span className={className.join(" ")} style={props.style}>
        {/* Logical IF untuk isLoading. jika ada isLoading, maka return className tersebut (Styling untuk). Jika tidak/sudah selesai, kembalikan semua isi children kembali */}
        {props.isLoading ? (
          // Styling ketika isLoading aktif
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span clasName="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  // Jika menerima type 'link', maka akan menjalankan perintah true [isExternal(New Tab/_blank) / <Link>(Link Router from react)].
  // Jika menerima props 'isExternal', maka jalankan tag <a> beserta childrennya. Jika tidak, jalankan <Link> dari Router ke dalam aplikasi beserta childrennya
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.target}
          // jika target menrima props '_blank', maka akan menjalankan IF STATEMENT untuk menulis "_blank"(True) atau "undefined"(False).
          target={props.target === "_blank" ? "_blank" : undefined}
          // Jika ada target "_blank", HARUS tulis juga rel. rel=relasi/hubungan antara current web dan link web. noopener & noreferrer ada kaitannya dengan SEO
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href} // kalo di tag <a> itu 'href', kalo di <Link> itu pakai 'to'
          className={className.join(" ")}
          style={props.style}
          onClick={onClick} // memanggil function onClik
        >
          {props.children}
        </Link>
      );
    }
  }

  // menampilkan / mengembalikan <button>
  return (
    <button
      href={props.href}
      className={className.join(" ")}
      style={props.style}
    >
      {props.children}
    </button>
  );
}

// tipe2 yang kemungkinan ada pada setiap button
Button.propTypes = {
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isDisabled: propTypes.bool, // kemungkinan ada button yg tidak aktif
  isLoading: propTypes.bool, // animasi ketika button di klik
  hasShadow: propTypes.bool,
  onClick: propTypes.func, // function onClick
  className: propTypes.string,
  target: propTypes.string, // link eksternal
  href: propTypes.string,
  type: propTypes.oneOf(["button", "link"]), // ENUM. hanya menerima property button dan link. mengambil satu dari sekumpulan nilai yg dimiliki (button or link)
  isExternal: propTypes.bool,
};
