//format thousand separator format dari browser untuk angka khusus wilayah indonesia
export default (number) => {
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(number);
};
