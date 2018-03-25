<?php
  if (isset($_POST['nilai'])) {
    $nilai = $_POST['nilai'];
    $uts = (int) $nilai['uts'];
    $uas = (int) $nilai['uas'];
    $quiz = (int) $nilai['quiz'];
    $tugas = (int) $nilai['tugas'];
    $total = ($uts * 0.2) + ($uas * 0.3) + ($quiz * 0.3) + ($tugas * 0.2);
    $index = $total >= 80
      ? "A"
      : ($total >= 70
        ? "B"
        : ($total >= 60
          ? "C"
          : ($total >= 50
            ? "D"
            : ($total >= 40
              ? "E"
              : "F"))));
  }
?>

<?php if (isset($_POST['nilai'])): ?>

<table border="1">
  <thead>
    <td>UTS</td>
    <td>UAS</td>
    <td>Quiz</td>
    <td>Tugas</td>
    <td>Total</td>
    <td>Index</td>
  </thead>
  <tbody>
    <tr>
      <td><?php echo $uts; ?></td>
      <td><?php echo $uas; ?></td>
      <td><?php echo $quiz; ?></td>
      <td><?php echo $tugas; ?></td>
      <td><?php echo $total; ?></td>
      <td><?php echo $index; ?></td>
    </tr>
  </tbody>
</table>

<a href="/inputNilai.php">kembali ..</a>

<?php else: ?>

<h1>ISI DULU LAH FORM-NYA *******!</h1>

<a href="/inputNilai.php">Isi Form</a>

<?php endif; ?>