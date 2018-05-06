---
layout: post
tex: <span class="latex">T<sub>E</sub>X</span>
latex: <span class="latex">L<sup>A</sup>T<sub>E</sub>X</span>
title: An introduction to <span class="latex">L<sup>A</sup>T<sub>E</sub>X</span>
date: 2013-10-27 14:32
comments: true
published: true
permalink: "/blog/an-introduction-to-latex"
description: "The write-up of my talk on LaTeX for beginners, as a part of Tech Talk Tuesday, an initiative of PES OpenSource"
disclaimer: "Note: This is a blog post from an older version of this website. Links and styles on this page might not work/render as expected."
---
<div class="disclaimer center grey text-small">{{ page.disclaimer }}</div>

The write-up of my talk on {{page.latex}} for beginners, as a part of *Tech Talk Tuesday*, an initiative of [PES OpenSource][1]. I structured my talk based on this book - [The Not So Short Introduction to {{page.latex}}][2]. So refer this book for all details as I've posted the notes I made to deliver my talk.

<!-- more -->

### Introduction

* Donald Knuth
    * 1977 - {{page.tex}}
    * 1982 - first {{page.tex}} engine
    * 1989 - enhancements
    * Why the name {{page.tex}} ? - Technology
* about {{page.tex}} and {{page.latex}}
* {{page.latex}} - Lay-Tech
* Why {{page.latex}} ?
    * professional look
    * mathematics & science
    * only few commands used to specify the structure
    * easy generation of footnotes, references, table of contents, etc
    * add-on packages
    * highly portable
    * free

---
### Basic Layout

##### Level -2

* spaces are uniform & single line break
* empty line defines end of para & severl empty lines
* 10 meta-characters. Escape to print metachar. `\textbackslash` to print escape char

##### Level -1

* Commands start with `\`
* case sensitive
* starred variant
* terminated with a non-letter
* Commands are space-hungry!
* use `{}`
* parameters in `{}`
* optional params `[]`
* `\command[optional]{param}`
* `%` -> Comments
* `verbatim` package. `\begin{comment}` to `\end{commend}`

##### Level 0

* file must start with `\documentclass{class}`
    * specifies type of document
    * some commands following this to specify some more details
    * optional commands -
        * size, papertype, formulae alignment, titlepage, twosided, openright, landscape, doc, font encoding, etc
* to load some package `\usepackage{name}`
* write content within `\begin{document}` and `\end{document}`
* `\pagestyle{style}` & `\thispagestyle{style}`
    * `plain` - page number in footer, middle
    * `headings` - headings, page number. empty footer.
    * `empty` - both empty
* `\include{file}` & `\includeonly{file,file,...}` & `\input{file}`

---
### Typesetting Text

##### Level 1

* `\\` & `\newline` & `\newpage` & `\\*`
* `\linebreak[n]` & `\nolinebreak[n]` & `\pagebreak[n]` & `\nopagebreak[n]`
* `\hyphenation{word list}`
* `\-`
* `\mbox{text}` & `\fbox{text}`
* `\today` & `\TeX{}` & `\LaTeX{}`
* quotation marks ` and '
* ligatures -  ff fi fl etc [Refer book, Sec:2.4.8, page 24]
* ellipsis - `\ldtos`
* `~` & `\@` & `\frenchspacing`
* `label{...}` & `\ref{...}` & `\pageref{...}`
* `\footnote{...}`

##### Level 2

* `\maketitle`
    * `\title`
    * `\author`
    * `\date` - optional
* `\tableofcontents`
* divide publication
    * `\frontmatter`
    * `\mainmatter`
    * `\appendix`
    * `\backmatter`
* `\part`
* `\chapter` - depends on document class
* `\section`
* `\subsection`
* `subsubsection`
* `\paragraph`
* `\subparagraph`
* `\begin{...}` & `\end{...}`
    * `enumerate`
        * use `\item`
    * `itemize`
        * use `\item`
    * `description`
        * use `\item[Name] Description ...`
    * `{flushleft}` & `{flushright}` & `{center}`
    * `{quote}` & `{verse}`
    * `{verbatim}`
    * `{tabular}` & `{|l|c|r|p{...}}`
    * `{verbatim}`
* `\verb+text+`

### Mathematics & Font handling

Refer the [book][2].

[1]: http://pesos.pes.edu/fb
[2]: http://tobi.oetiker.ch/lshort/lshort.pdf
