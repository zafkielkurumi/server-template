
# a=$(svn info -r 'HEAD' | grep 'Last Changed Rev' | egrep -o "[0-9]+")
# echo $a
# flutter build apk --build-name=1.0.1 --build-number=$a
# flutter build apk --split-per-abi --build-name=1.0.0 --build-number=$a
# cp ./build/app/outputs/apk/release/app-release.apk ./release_apk/app-$a-$(date "+%m%d%H%M").apk
# cp ./build/app/outputs/apk/release/app-armeabi-v7a-release.apk ./release_apk/app-armeabi-v7a-$a-$(date "+%m%d%H%M").apk
# cp ./build/app/outputs/apk/release/app-arm64-v8a-release.apk ./release_apk/app-arm64-v8a-$a-$(date "+%m%d%H%M").apk
# flutter channel dev
# flutter package get
echo "hello world"
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

