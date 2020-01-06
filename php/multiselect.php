<?php
/**
 * $datafields = array('fielda', 'fieldb', ... );
 * $data[] = array('fielda' => 'value', 'fieldb' => 'value' ....);
 * $data[] = array('fielda' => 'value', 'fieldb' => 'value' ....);
 * 
 * TO
 * 
 * insert into table (fielda, fieldb, ... ) values (?,?...), (?,?...)....
 */

function mulitInsert(array $datafields, array $data){
    $insert_values = [];
    foreach ($data as $d) {
        $question_marks[] = '('  . placeholders('?', sizeof($d)) . ')';
        $insert_values = array_merge($insert_values, array_values($d));
    }

    $sql = "INSERT INTO table (" . implode(",", $datafields) . ") VALUES " .
       implode(',', $question_marks);

    $stmt = $this->pdo->prepare($sql);
    $stmt->execute($insert_values);
}

function placeholders(string $text, int $count = 0, string $separator = ","){
    $result = [];
    if($count > 0){
        for($x=0; $x<$count; $x++){
            $result[] = $text;
        }
    }

    return implode($separator, $result);
}