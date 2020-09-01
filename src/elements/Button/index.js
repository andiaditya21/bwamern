import React from "react";
import { Link } from "react-router-dom";
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

  // ketersediaan link external
  if (props.type === "link") {
    // atrb isExternal (new tab) akan menampilkan tag <a>, diluar itu akan menampilan <Link>
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.target}
          target={props.target === "_blank" ? "_blank" : undefined} // jika targetnya adalah halaman baru, maka tampilkan halaman baru
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined} // rel=relasi antara current web dan link web. noopener & noreferrer ada kaitannya dengan SEO
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          href={props.href}
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
  type: propTypes.oneOf(["button", "link"]), // hanya menerima property button dan link
  isExternal: propTypes.bool,
};
