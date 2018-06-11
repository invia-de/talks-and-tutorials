export default function classnames(...args) {
  return args.filter(str => typeof str === 'string').join(' ');
}
