---
title: 使用 lit 测试 LLVM IR 文件
author: Lee
---

## 术语匹配

- lit: LLVM Integrated Tester
- .ll: LLVM IR 文件

## 前置条件

已安装 llvm

## 测试流程

```yaml
float.ll
  |
  v
lit 执行 RUN 指令 -> llc 生成输出
  |
  v
FileCheck 校验输出
  |
  +--✔️ 全部匹配：PASS
  |
  +--❌ 有错：FAIL
```

## 执行语句

可指定某一文件，也可指定某文件夹。

```bash
llvm-lit llvm/test/CodeGen/RISCV/VentusGPGPU/float.ll
```

## 输出

```bash
-- Testing: 1 tests, 1 workers --
PASS: LLVM :: CodeGen/RISCV/VentusGPGPU/float.ll (1 of 1)

Testing Time: 0.07s
  Passed: 1
```
