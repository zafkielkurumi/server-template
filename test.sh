
# a=$(svn info -r 'HEAD' | grep 'Last Changed Rev' | egrep -o "[0-9]+")
# echo $a
# flutter build apk --build-name=1.0.1 --build-number=$a
# flutter build apk --split-per-abi --build-name=1.0.0 --build-number=$a
env="$1"
echo "env ${env}"
# echo为整个内容替换
echo "const baseUrl = '1';
const prodUrl = '1';
" > test.ts
case $env in 
 '--prod') 
 baseUrl='127.0.0.1prod'
;;
 '--dev')
 baseUrl='127.0.0.1dev'
 ;;
 '--zsl')
 baseUrl='127.0.0.1zsl'
 ;;
 *)
 baseUrl='127.0.0.1'
 ;;
 esac

 echo "
 export const baseUrl='$baseUrl';
 " > test.ts

