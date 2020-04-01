<template>
    <article>
        <div class="mark"/>
        <div class="essayText">
            <section class="prologue">
                <p>当年用 PDO 封装的 MySQL 增删改查工具，用着很方便，还能防 sql 注入。<strong>代码中有很多稚嫩之处，却不忍修改，都是岁月的痕迹，留着这些稚嫩的痕迹更好</strong>。</p>
                <p>起初只是用来练习的，后来发现还挺好用，就放到这里保存起来。</p>
            </section>
            <section>
                <h2>PDO 的 MySQL 封装： DBOperator</h2>
                <pre class="prettyprint" contenteditable="true">
const DB_TYPE = "mysql";      //数据库类型
const DB_HOST = 'localhost';  //域名
const DB_NAME = 'db1';        //数据库名
const DB_PORT = 3308;         //端口号
const DB_USERNAME = 'root';   //数据库用户名
const DB_PASSWORD = 'root';   //数据库密码
const DB_CHARSET  = 'utf8';   //连接时使用的字符集（PDO需要，否则会有bug）
//以上内容最终应在配置文件中设置

//用法：DBOperator.submit("sql语句") 返回结果为 json 或受影响条数（整型）

class DBOperator{
    static private $pdo;//要删除连接，只需Datamate::$pdo = null 即可
    static private $stmt;

    static public  $sql;
    static public  $template = [];
    static public  $json     = "";
    static public  $result   = 0;

    //如果要使用$pdo->quote方法防sql注入，可以先用该静态方法建立连接，获取到$pdo
    static function connect($cfg=""){
        return self::$pdo = new PDO($cfg['dsn'],$cfg['username'],$cfg['password'],array(PDO::ATTR_PERSISTENT=>true));
    }

    //提交sql语句，查询语句默认返回json，其他语句返回受影响条数，该方法不防sql注入
    static function submit($sql="",$format="json",$cfg=""){

        //检查$sql语句是否为空
        $sql || die("DBOperator::submit参数错误");

        //获取（创建）数据库连接信息，并将其储存在$cfg中
        $cfg || $cfg = array(
            'dbms'     => DB_TYPE,
            'hostname' => DB_HOST,
            'database' => DB_NAME,
            'port'     => DB_PORT,
            'charset'  => DB_CHARSET,
            'username' => DB_USERNAME,
            'password' => DB_PASSWORD,
            'dsn'      => DB_TYPE.":host=".DB_HOST.";port=".DB_PORT.";dbname=".DB_NAME.";charset=".DB_CHARSET
        );

        //建立持久连接，并将其储存到Datamate::$pdo中
        $pdo = !self::$pdo ? self::$pdo = new PDO($cfg['dsn'],$cfg['username'],$cfg['password'],array(PDO::ATTR_PERSISTENT=>true)) : self::$pdo;

        //虽创建数据库时是utf8，但其核心并非彻底的utf8，所以每次连接都要设置！
        $pdo -> exec("SET NAMES ".DB_CHARSET);

        switch(substr(strtolower(trim($sql)),0,1)){
            //当sql为查询语句时
            case "s":
                //执行语句，返回PDOStatement对象$stmt
                self::$stmt = $stmt = $pdo -> query($sql);
                //如果sql语句执行成功，则返回查询结果
                if($stmt instanceof PDOStatement){
                    $arr = array();
                    //将每行数据以索引数组的形式存入一个大数组
                    while($row = $stmt -> fetch(PDO::FETCH_ASSOC)) array_push($arr,$row);
                    return self::$result = json_encode($arr,JSON_UNESCAPED_UNICODE);
                }else
                    //如果sql语句执行失败，则返回错误信息（包含错误码、错误原因的数组）
                    return self::$result = $pdo -> errorInfo();

                break;
            case "u"://sql为修改语句时
            case "i"://sql为插入语句时
            case "d"://sql为删除语句时
            //将查询受影响条数（整型）存入结果并返回
                return self::$result = $pdo -> exec($sql);
                break;
            default:
                die("SQL语句有误");
        }
    }

    static function purge(){self::$stmt = null;unset($stmt);unset($pdo);unset($arr);}//释放变量，清除$stmt数据，$pdo不受影响
}
</pre>
            </section>
        </div>
        <div class="Fin">
            Fin
        </div>
    </article>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "essayText",
        computed:{
            ...mapState(['display'])
        }
    }
</script>

<style scoped lang="scss">
    article{
        position: relative;
        div.mark{
            position: absolute;top: 0;left: -12px;
            width: 12px;
            height: 56px;
            border-radius: 5px 0 0 5px;
            box-shadow: -2px 0 4px #646464;
            &::after{
                display: block;content: '';
                width: 20px;
                height: 56px;
                background-color: hsl(0,0,95%);
                border-radius: 5px 0 0 5px;
            }
        }
        div.essayText{
            padding: .9rem 1.7rem 0.7rem 1.7rem;
            min-height: calc(100vh - 128px);
            font-size: 17px;
            word-break: break-all;
            text-align: justify;
            @media(max-width: 600px){
                padding: 0.6rem;
            }

        }
        div.Fin{
            letter-spacing: 2px;
            user-select: none;
            color: rgba(84,89,93,.9);
            font-size: 1.3rem;
            font-weight: bold;
            padding: 2rem 1.7rem;
            border-radius: 2px;
            margin: 0 1.7;

            @media(max-width: 600px){
                color: hsl(0,0%,92%);
                text-align: center;
                background-color: rgba(84,89,93,.8);
                margin: 0 ;
                border-radius: 0;
            }
        }
    }

section{
    padding: 12px 0;
    border-bottom: 1px solid rgb(170,170,170);
    &:last-child{
        border-bottom: none;
    }
    h2{ //章节标题
        &::before{
            vertical-align: middle;
            display: inline-block;content: '';
            width: 1.1rem;
            height: 0.5rem;
            margin-right: 1rem;
            background-color:#bb1c1c;
            transform: translateY(-0.15rem);
        }
        font-size: 1.25rem;
        line-height: 1.4rem;
        margin: 1.8rem 0;
    }
    p{
        line-height: 1.85rem;
        text-indent:2em;
        margin: 1.5rem 0;
    }
    q{
        display: block;
        font-size: 1rem;
        background-color: hsl(0,0%,88%);
        border-radius: 4px;
        padding: 0.45rem 0.6rem;
        margin: -0.35rem 0 0 0;
    }
    a{
        text-decoration: none;
        color: #0366d6;
        &:hover{
            text-decoration: underline;
        }
    }
    strong{ //重点内容下划线
        font-weight: bold;
        padding: 0 0 2px 0;
    }
    img{
        display: block;
    }
    img.fullWidth{
        width: 98%;
        @media(max-width: 600px){
            width: 100%;
        }
    }
    img.largeWidth{
        width: 82%;
        @media(max-width: 600px){
            width: 100%;
        }
    }
    img.mediumWidth{
        width: 64%;
        @media(max-width: 600px){
            width: 89%;
        }
    }
    img.halfWidth{
        width: 52%;
        @media(max-width: 600px){
            width: 62%;
        }
    }
    sup{
        font-size: 0.6rem;padding: 1px;
    }
    .imgDescription{
        display: block;text-align: center;
    }
    ol{
        padding: 0 0 0 3.2rem;
        margin: 0;
        text-indent: 0;
        line-height: 1.4rem;
        @media(max-width: 600px){
            padding-left:18px;
        }

        li{
            margin: .7rem 0;
        }
    }
}
div.keyCode{
    padding: 12px;
    font-size: 12px;
    line-height: 22px;
    font-weight: lighter;
    color: white;
    background-color: #1c2125;
    &::selection{
        color: white;
        background-color: #0563D4;
    }
}
pre.prettyprint{ //演示代码

    color: #0000dd;
    font-size: 0.82rem;
    line-height: 1.5rem;
    font-family: "Lucida Console", Consolas, Monaco;
    background-color: hsl(0,0%,90%);
    padding: 0.7rem 2rem !important;
    border: 1px dashed rgb(119, 136, 85)!important;
    border-radius: 4px;

    margin: 0.6rem 0 1.2rem 0;
    overflow-x: auto;
    &:hover{
        background-color: hsl(0,0%,92%);
    }
    span.kwd{
        color: #0000dd;
        font-weight: bold;
    }
    span,typ,span.pln,span.pun{
        color: #0000dd;
    }
    span.lit{
        //color: #9e0000;
    }
    span.com{
        color: #005a78;
    }
    em{
        font-style:normal;
        color:#005a78;
    }
}
</style>